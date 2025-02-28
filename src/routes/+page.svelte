
<script lang="ts">
	import { Navbar, Footer, TitleBar } from '$lib';
	import ship1 from '$lib/images/ship1.png';
	import ship5 from '$lib/images/ship5.png';
</script>
<!-- Homepage -->
<div class="h-screen flex flex-col justify-between">
	<!-- Navbar Component -->
	<Navbar />

	<!-- Title Bar Component -->
	<TitleBar title="Welcome to EasyShip"/>

	<!-- Image Component | Should take up entire width | dont stretch the image but the height should be 50vh -->
	<div class="container mx-auto p-4 h-[25vh] overflow-hidden flex items-center justify-center">
		<img src={ship1} alt="Ship Image" class="w-full h-auto object-cover" />
	</div>

	<TitleBar title="The Benefits of Ocean Freight Shipping"/>

	<!-- Left half should use an avatar and right half should use a list where instead of dots icons are used.-->
	<div class="container mx-auto p-4">
		<div class="flex justify-between items-center">
			<!-- Left Half: Avatar -->
			<div class="w-1/2 flex items-center">
				<img src={ship5} alt="John Doe" class="w-[400px] h-[300px] rounded-full" />
			</div>
	
			<!-- Right Half: List -->
			<div class="w-1/2">
				<ul class="list-none space-y-4 text-xl">
					<li class="flex items-center">
						<span class="mr-2 text-blue-500">
							<!-- Replace with an icon if needed -->
							&#x2713;
						</span>
						<strong>Economical</strong>: Generally ocean freight is 4-6x cheaper than air freight.
					</li>
					<!-- Horizontal Line -->
					<li class="border-t border-surface-300 my-4"></li>
					<li class="flex items-center">
						<span class="mr-2 text-blue-500">
							&#x2713;
						</span>
						<strong>Bulky Cargo</strong>: Most large equipment can only be transported via ocean freight.
					</li>
					<!-- Horizontal Line -->
					<li class="border-t border-surface-300 my-4"></li>
					<li class="flex items-center">
						<span class="mr-2 text-blue-500">
							&#x2713;
						</span>
						<strong>Safety</strong>: Cargo ships can carry hazardous materials much safer than air.
					</li>
					<!-- Horizontal Line -->
					<li class="border-t border-surface-300 my-4"></li>
					<li class="flex items-center">
						<span class="mr-2 text-blue-500">
							&#x2713;
						</span>
						<strong>Ecological</strong>: Cargo ships have the most carbon efficient transportation method.
					</li>
				</ul>
			</div>
		</div>
	</div>
	

	<!-- Footer Component -->
	<Footer />
</div>