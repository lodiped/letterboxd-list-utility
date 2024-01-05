<script>
	import '../app.css';
</script>

<header class="flex w-full justify-center items-center gap-10 py-4 bg-background">
	<div class="flex justify-between w-[950px] items-center">
		<a href="/" class="flex items-center cursor-pointer">
			<div class="flex mr-2">
				<div class="bg-orange-500 h-6 w-6 rounded-full"></div>
				<div class="bg-green-500 h-6 w-6 rounded-full -translate-x-1"></div>
				<div class="bg-blue-500 h-6 w-6 rounded-full -translate-x-2"></div>
			</div>
			<h1 class="text-3xl text-white font-[Inter] font-bold tracking-tight">Lists++</h1>
		</a>
		<div class="flex gap-5 text-xs tracking-widest items-center">
			<a href="/films" class="text-greytext font-bold cursor-pointer hover:text-white">FILMS</a>
			<a href="/lists" class="text-greytext font-bold cursor-pointer hover:text-white">LISTS</a>
			<a href="/polls" class="text-greytext font-bold cursor-pointer hover:text-white">POLLS</a>
			<a href="/login" class="text-greytext font-bold cursor-pointer hover:text-white">LOGIN</a>
			<button class="bg-lime-500 tracking-widest font-bold rounded p-2">+ NEW LIST</button>
		</div>
	</div>
</header>

<slot />

<footer class="h-32 mt-20 bg-card flex justify-center items-center text-xs text-greytext">
	<p>
		This proof-of-concept uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise
		approved by TMDB.
	</p>
</footer>
