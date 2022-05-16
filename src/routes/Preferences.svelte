<script>
  import { quintOut } from 'svelte/easing'
  import { crossfade } from 'svelte/transition'
  import {
    preferences,
    resetPreferences,
  } from '../stores/preferences/preferences'

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node)
      const transform = style.transform === 'none' ? '' : style.transform

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      }
    },
  })

  let todos = $preferences.map((x) => ({
    id: x.id,
    done: x.selected,
    description: x.name,
  }))

  function remove(todo) {
    todos = todos.filter((t) => t !== todo)
  }

  function mark(todo, done) {
    todo.done = done
    remove(todo)
    todos = todos.concat(todo)
    $preferences = todos.map((x) => ({
      id: x.id,
      selected: x.done,
      name: x.description,
    }))
  }

  function reset() {
    resetPreferences()

    todos = $preferences.map((x) => ({
      id: x.id,
      done: x.selected,
      description: x.name,
    }))
  }
</script>

<style>
  .board {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    max-width: 36em;
    margin: 0 auto;
  }

  h2 {
    font-size: 2em;
    font-weight: 200;
    user-select: none;
    margin: 0 0 0.5em 0;
  }

  label {
    display: block;
    position: relative;
    line-height: 1.2;
    padding: 0.5em 2.5em 0.5em 2em;
    margin: 0 0 0.5em 0;
    border-radius: 2px;
    user-select: none;
    border: 1px solid hsl(240, 8%, 70%);
    background-color: hsl(240, 8%, 93%);
    color: #333;
  }

  input[type='checkbox'] {
    position: absolute;
    left: 0.5em;
    top: 0.6em;
    margin: 0;
  }

  .done {
    border: 1px solid hsl(240, 8%, 90%);
    background-color: hsl(240, 8%, 98%);
  }
  
</style>

<div class="board">

  <div class="left">
    <h2>Unused</h2>
    {#each todos.filter((t) => !t.done) as todo (todo.id)}
      <label in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
        <input type="checkbox" on:change={() => mark(todo, true)} />
        {todo.description}
      </label>
    {/each}
  </div>

  <div class="right">
    <h2>Selected</h2>
    {#each todos.filter((t) => t.done) as todo (todo.id)}
      <label
        class="done"
        in:receive={{ key: todo.id }}
        out:send={{ key: todo.id }}>
        <input type="checkbox" checked on:change={() => mark(todo, false)} />
        {todo.description}
      </label>
    {/each}
    <button on:click={reset}>Reset Preferences</button>
  </div>

</div>
