<script lang="ts">
	export let searchTerm: string;
	export let values: string[];

	import SearchIcon from '../assets/icons/search.svg?component';
	import ArrowRightIcon from '../assets/icons/arrow-right.svg?component';
</script>

<style>
    .search-block {
        background: #0B0B0F;
        box-shadow: 0 0 0 1px #00000014, 0 2px 8px 0 #0000000F;
        border: 1px solid #15171B
    }

    .search-box {
        background: #1B1E22;

        & > input {
            color: #F5F5F5;
            font-weight: 600;

            &::placeholder {
                color: #F5F5F5;
            }
        }
    }

</style>
<div class="search-block rounded-[10px] mt-3 p-[7px]">
	<div class="search-box flex justify-between items-center rounded-[8px] relative mb-2">
		<input
			class="text-[14px] py-2.5 px-3 w-full"
			placeholder="Search for help"
			bind:value={searchTerm}
		/>
		<SearchIcon width="16" height="18" class="absolute right-[12px] pointer-events-none cursor-pointer" />
	</div>

	<div class="values overflow-auto h-max-[164px]">
		{#if searchTerm}
			{#each values.filter(value => value.toLowerCase().includes(searchTerm.toLowerCase())) as filteredValue}
				<div class="cursor-pointer value-item text-[#F5F5F5] px-3 py-2.5 text-[14px] flex justify-between items-center">
					<span class="font-normal">{filteredValue}</span>
					<ArrowRightIcon />
				</div>
			{/each}
		{:else}
			{#each values as value}
				<div
					class="cursor-pointer value-item text-[#F5F5F5] px-3 py-2.5 text-[14px] flex justify-between items-center">
					<span class="font-normal">{value}</span>
					<ArrowRightIcon />
				</div>
			{/each}
		{/if}
	</div>
</div>
