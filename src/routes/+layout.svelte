<script>
	import '../app.css';
</script>

<header class="flex w-full justify-center items-center gap-10 py-4 bg-background">
	<div class="flex items-center cursor-pointer">
		<div class="flex mr-2">
			<div class="bg-orange-500 h-6 w-6 rounded-full"></div>
			<div class="bg-green-500 h-6 w-6 rounded-full -translate-x-1"></div>
			<div class="bg-blue-500 h-6 w-6 rounded-full -translate-x-2"></div>
		</div>
		<h1 class="text-3xl text-white font-[Inter] font-bold tracking-tight">Lists++</h1>
	</div>
	<div class="flex gap-5 text-xs tracking-widest">
		<span class="text-greytext font-bold cursor-pointer hover:text-white">FILMS</span>
		<span class="text-greytext font-bold cursor-pointer hover:text-white">LISTS</span>
		<span class="text-greytext font-bold cursor-pointer hover:text-white">POLLS</span>
		<span class="text-greytext font-bold cursor-pointer hover:text-white">LOGIN</span>
	</div>
</header>

<slot />

<footer class="h-32 mt-20 bg-card flex justify-center items-center text-greytext">
	Footer Layout
</footer>
