<script lang="ts">
    import { Navbar, Footer } from '$lib';
    import ContainerIcon from '~icons/lucide/container';
    import WindIcon from '~icons/lucide/wind';
    import TruckIcon from '~icons/lucide/truck';
    import SpeedIcon from '~icons/lets-icons/speed';
    import FuelIcon from '~icons/lucide/fuel';

    import ship4 from '$lib/images/ship4.png';
    import ship3 from '$lib/images/ship3.png';
</script>

<div class="h-screen flex flex-col justify-between">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Website Content -->
    <div class="container mx-auto p-4 text-center">
        <h1 class="text-4xl font-bold mb-4">About EasyShip</h1>
        <div class="container mx-auto p-4 h-[25vh] overflow-hidden flex items-center justify-center">
            <img src={ship3} alt="Ship Image" class="w-full h-auto object-cover" />
        </div>
        <br>
        <p class="text-lg text-primary mb-8">
            EasyShip is a leading provider of ocean freight services, offering a wide range of shipping options for both small and large cargo.
        </p>
        <div class="container mx-auto p-4">
            <div class="flex justify-between items-center">
                <!-- Left Half: Cargo Ship Image -->
                <div class="w-1/2 flex items-center">
                    <img src={ship4} alt="John Doe" class="w-[370px] h-[350px] rounded-full" />
                </div>
        
                <!-- Right Half: List -->
                <div class="w-9/10">
                    <ul class="list-none space-y-4 text-xl">
                        <li class="flex items-center">
                            <span class="mr-2 text-blue-500">
                                <WindIcon />
                            </span>
                            <strong>Throughput:</strong> EasyShip has transported over 50 million tons of cargo worldwide.
                        </li>
                        <!-- Horizontal Line -->
                        <li class="border-t border-surface-300 my-4"></li>
                        <li class="flex items-center">
                            <span class="mr-2 text-blue-500">
                                <TruckIcon />
                            </span>
                            <strong>Unloading:</strong> EasyShip has the fastest unloading times in the industry with an annual port dwell time of 22.6 hours.
                        </li>
                        <!-- Horizontal Line -->
                        <li class="border-t border-surface-300 my-4"></li>
                        <li class="flex items-center">
                            <span class="mr-2 text-blue-500">
                                <SpeedIcon />
                            </span>
                            <strong>Transit:</strong> EasyShips average transit time is only 26 days. That's 18% faster than the global average!
                        </li>
                        <!-- Horizontal Line -->
                        <li class="border-t border-surface-300 my-4"></li>
                        <li class="flex items-center">
                            <span class="mr-2 text-blue-500">
                                <FuelIcon />
                            </span>
                            <strong>Efficient:</strong> EasyShip's average fuel consumption is 0.09 liters per kilometer. That's 10% lower than the global average!
                        </li>
                        <!-- Horizontal Line -->
                        <li class="border-t border-surface-300 my-4"></li>
                        <li class="flex items-center">
                            <span class="mr-2 text-blue-500">
                                <ContainerIcon />
                            </span>
                            <strong>Container Loss:</strong> EasyShip has never lost a container. That's 100% higher than the global average!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Component -->
    <Footer />
</div>