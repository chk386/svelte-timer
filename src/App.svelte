<script lang="ts">
  import Tailwindcss from './Tailwindcss.svelte'
  import Timers from './timer/Timers'

  const message = '1부터 60까지 입력하세요'
  const refreshCallBack = () => (timers = Object.create(timers))

  let num: string
  let index = 0
  let timers = new Timers(refreshCallBack)

  const inputEvent = (event: KeyboardEvent) => {
    try {
      if (event.code === 'Enter') {
        const parsedNum = parseInt(num)
        validate(parsedNum)
        timers.addTimer((index += 1), parsedNum)
        refreshCallBack()

        num = ''
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const validate = (input: number) => {
    console.log(input)
    if (Number.isNaN(input) || input < 1 || input > 60) {
      throw new RangeError(message)
    }
  }

  const onButtonClick = () => {
    timers.clearAll()
    console.log(timers)
    refreshCallBack()
  }
</script>

<Tailwindcss />

<main class="m-10 max-w-md">
  <div class="p-1 bg-blue-300">
    <label for="input" />
    <input
      class="placeholder-red-900 w-48"
      type="number"
      id="input"
      min="1"
      max="10"
      placeholder={message}
      bind:value={num}
      on:keypress={inputEvent}
    />
    <div class="p-3">
      <ul>
        {#each timers.timers as timer, i}
          <li class="m-3 bg-blue-100">Timer{i + 1} : {timer.num}</li>
        {:else}
          <li>생성된 타이머가 없습니다.</li>
        {/each}
      </ul>
    </div>
  </div>
  <div>
    <button class="w-32 md:w-auto bg-yellow-300 p-2" on:click={onButtonClick}>
      모두완료
    </button>
  </div>
</main>
