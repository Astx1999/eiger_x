<script>
	import EnterIcon from '../assets/icons/enter.svg?component';
</script>
<style>
    .custom-border {
        border: 1px solid #24FFBC;
        box-shadow: 0 0 0 1px #00000014, 0 2px 8px 0 #0000000F;
    }

    .secondary-text {
        color: #83838D;
    }

    .custom-bg {
        background: #1B1E22;
    }
</style>
<div class="custom-border custom-bg py-[15px] px-[19px] rounded-[10px] flex justify-between items-center">
	<div>
		<p class="text-white font-semibold text-[14px]">Send us a message</p>
		<p class="secondary-text font-normal text-[14px]">We typically reply within a day</p>
	</div>
	<EnterIcon width="17" height="13.8" />
</div>