<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import MessageCard from '../components/MessageCard.svelte';
	import SearchBlock from '../components/SearchBlock.svelte';

	import { values } from '../data/values.js';
	import { users } from '../data/users.js';

	let searchTerm = '';
</script>

<style>
    .root {
        background: linear-gradient(132.15deg, #211A1A 0%, #212127 95.96%);
    }

    .custom-bg {
        background: linear-gradient(132.15deg, #0B0B0F 0%, rgba(26, 26, 34, 0.9) 95.96%);
    }

    .gradient-underlay {
        background: #24FFBC;
    }
</style>

<div class="relative max-w-[400px] min-h-[704px] m-auto rounded-[16px] overflow-auto root leading-[21px] [@media(max-width:400px)]:rounded-none">

	<div class="p-4 max-h-[388px] gradient-underlay bg-cover z-0 relative">
		<div class="w-full h-full absolute left-0 top-0 z-[-1] custom-bg"></div>
	<Header {users} />
	</div>
	<div class="px-4 min-h-[315px] mb-0 relative top-[-120px] z-1 relative">
		<MessageCard />
		<SearchBlock {values} {searchTerm} />
	</div>
	<Footer />
</div>