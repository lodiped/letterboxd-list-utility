<script>
	const films = [
		{
			title: 'A Name',
			year: 1957
		},
		{
			title: 'Another name',
			year: 1966
		},
		{
			title: 'Bla bla bla',
			year: 2017
		},
		{
			title: "Let's goooo",
			year: 1967
		},
		{
			title: 'Adougadougo',
			year: 1982
		},
		{
			title: 'Something else again',
			year: 1992
		},
		{
			title: 'Another name',
			year: 1932
		},
		{
			title: 'Preoccupations',
			year: 1977
		},
		{
			title: 'Sleepwalkers out',
			year: 2006
		},
		{
			title: 'The task at hand',
			year: 2019
		},
		{
			title: 'Focusing',
			year: 2009
		},
		{
			title: 'Memory',
			year: 1997
		}
	];
</script>

<main class="background-gradient pt-9">
	<div class="w-full flex justify-center gap-12">
		<div class="w-[670px]">
			<div>
				<div class="flex items-center text-xs">
					<div
						class="rounded-full cursor-pointer border-greytext bg-card hover:border-white border h-6 w-6 mr-2"
					></div>
					<span class="text-greytext">List by&nbsp;</span>
					<span class="text-greytext font-bold hover:text-white cursor-pointer">List Author</span>
				</div>
				<div
					class="text-[#678] text-xs tracking-wide w-full border-y justify-between border-[#678] flex my-3 py-1.5"
				>
					<div class="justify-start flex cursor-default"><span>Updated when</span></div>
					<div class="flex justify-end gap-3">
						<div class="hover:text-greytext cursor-default">
							DECADE <span class="text-[#678]/75">V</span>
						</div>
						<div class="hover:text-greytext cursor-default">
							GENRE <span class="text-[#678]/75">V</span>
						</div>
						<div class="hover:text-greytext cursor-default">
							SERVICE <span class="text-[#678]/75">V</span>
						</div>
						<div class="hover:text-greytext cursor-default">
							Sort by LIST ORDER <span class="text-[#678]/75">V</span>
						</div>
					</div>
				</div>
			</div>
			<div class="flex justify-between">
				<h2 class="text-2xl my-1 font-['Inter']">List title abcde sejairg</h2>
				<button
					class="p-1 rounded bg-orange-600/30 border-t border-orange-600/40 h-fit text-xs text-nowrap text-orange-600/60 hover:text-white hover:bg-orange-600/75 cursor-pointer mt-4 whitespace-nowrap"
				>
					<span>IC </span><span>Read Notes</span>
				</button>
			</div>
			<h2 class="text-greytext font-normal mt-2 mb-5 text-sm">description and stuff lmao</h2>
			<div class="inline-flex flex-wrap gap-2.5">
				{#each films as film, index}
					<button
						title={film.title + ' (' + film.year + ')'}
						class="border cursor-pointer hover:border-4 hover:border-lime-400 border-greytext h-[187px] w-[125px] rounded bg-card"
					></button>
				{/each}
			</div>
			<div class="mt-12">
				<div class="border-b border-card flex justify-between">
					<span class="text-xs py-1.5 text-greytext tracking-widest">COMMENT?</span>
					<span class="text-xs py-1.5 text-greytext tracking-widest">ICON</span>
				</div>
			</div>
		</div>
		<div class="w-[230px] gap-px flex flex-col">
			<button
				class="bg-actioncard justify-center flex text-sm text-actiontext py-2 rounded-t w-full"
			>
				Create General Poll
			</button>
			<button
				class="bg-actioncard justify-center flex text-sm text-actiontext py-2 rounded-b w-full"
			>
				Create Individual Polls
			</button>
		</div>
	</div>
</main>
