<script lang="ts">
	export let users: string[] = [];
</script>

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
			<h1 class="text-white text-[32px] font-bold leading-[38px] whitespace-nowrap">
				How can we help?
			</h1>
		</div>
	</div>
