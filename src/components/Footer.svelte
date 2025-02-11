<script>
	import HomeIcon from '../assets/icons/home.svg?component';
	import MessagesIcon from '../assets/icons/messages.svg?component';
	import HelpIcon from '../assets/icons/help.svg?component';
</script>

<style>
    .footer {
        box-shadow: 0 0 25px 0 #0000000D;
    }
</style>

<div class="footer absolute bottom-[-2px] w-[calc(100%-32px)] left-4 rounded-[8px] h-[81px] bg-[#0B0B0F] py-3.5 my-6.5">
	<div class="flex justify-around items-center">
		<div class="text-center text-white w-[33.3%]">
			<HomeIcon class="m-auto" width="24px" height="24px" />
			<p class="text-xs mt-2.5 text-[14px]" style="color: #24FFBC">Home</p>
		</div>
		<div class="text-center text-white  w-[33.3%]">
			<MessagesIcon class="m-auto" width="24px" height="24px" />
			<p class="text-xs mt-2.5 text-[14px]">Messages</p>
		</div>
		<div class="text-center text-white  w-[33.3%]">
			<HelpIcon class="m-auto" width="25px" height="25px" />
			<p class="text-xs mt-2.5 text-[14px]">Help</p>
		</div>
	</div>
</div>