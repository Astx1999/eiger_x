<script lang="ts">
	export let users: string[] = [];
</script>

<style>
    .custom-bg {
        background: linear-gradient(132.15deg, #0B0B0F 0%, rgba(26, 26, 34, 0.9) 95.96%);
    }
</style>

<div class="p-4 bg-gradient-custom bg-cover custom-bg z-1 relative">
	<div class="p-5 pb-[152px] mb-0">
		<div class="flex justify-between">
			<img src="/logo.png" alt="Logo" class="w-[110.67px] h-[32px] mt-2" />

			<div class="flex">
				{#each users as user, i}
					<img
						src={user}
						alt="User"
						class=" rounded-full
                   {i < 2 ? 'border-[2px] border-[#0B0B0F] w-[44px] h-[44px] -ml-[6px] -mt-[2px]' : 'w-[40px] h-[40px] ml-[-4px]'}
                   {i === 0 ? 'z-30' : i === 1 ? 'z-20' : 'z-10'}"
					/>
				{/each}
			</div>

		</div>
		<div class="bg-background text-text font-sans pt-[98px]">
			<h1 class="text-white text-[32px] font-bold leading-[38px] opacity-70">
				Hello there
			</h1>
			<h1 class="text-white text-[32px] font-bold leading-[38px]">
				How can we help?
			</h1>
		</div>
	</div>
</div>