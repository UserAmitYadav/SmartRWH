<?php include 'includes/header.php'; ?>
<?php include 'includes/navbar.php'; ?>

<?php
include 'includes/db.php';

/* Registered Users */
$sql = "SELECT COUNT(*) AS totalUsers FROM users";
$totalUsers = $conn->query($sql)->fetch_assoc()['totalUsers'];

/* Total Calculations */
$sql = "SELECT COUNT(*) AS totalCalculations FROM calculations";
$totalCalculations = $conn->query($sql)->fetch_assoc()['totalCalculations'];

/* Total Water Saved */
$sql = "SELECT SUM(annual_water) AS totalWater FROM calculations";
$totalWater = $conn->query($sql)->fetch_assoc()['totalWater'] ?: 0;

/* Cities Covered */
$sql = "SELECT COUNT(DISTINCT city) AS totalCities FROM calculations";
$totalCities = $conn->query($sql)->fetch_assoc()['totalCities'];
?>

<!-- Hero Section -->
<section class="hero">

    <div class="container">

        <div class="row align-items-center">

            <!-- Left Content -->
            <div class="col-lg-6 text-center text-lg-start">

                <span class="badge bg-primary mb-3">
                    🌧️ Sustainable Water Management
                </span>

                <h1 class="hero-title">
                    Smart Rainwater
                    <span class="text-primary">Harvesting</span>
                    System
                </h1>

                <p class="hero-text mt-4">

                    Calculate rainwater harvesting potential,
                    monitor usage, store reports,
                    and help conserve water using a
                    modern web-based management system.

                </p>

                <div class="mt-4">

                    <a href="auth/register.php"
                       class="btn btn-primary btn-lg me-3">

                        Get Started

                    </a>

                    <a href="#features"
                       class="btn btn-outline-primary btn-lg">

                        Learn More

                    </a>

                </div>

            </div>

            <!-- Right Image -->

            <div class="col-lg-6 text-center mt-5 mt-lg-0">

                <img
                    src="assets/images/rainwater.png"
                    class="img-fluid hero-image"
                    alt="Rainwater Harvesting">

            </div>

        </div>

    </div>

</section>
<!-- ================= FEATURES SECTION ================= -->

<section id="features" class="features py-5">

    <div class="container">

        <div class="text-center mb-5">

            <h2 class="fw-bold">
                Why Choose Smart Rainwater Harvesting?
            </h2>

            <p class="text-muted">
                Powerful features to calculate, monitor and manage rainwater harvesting efficiently.
            </p>

        </div>

        <div class="row g-4">

            <div class="col-lg-3 col-md-6">

                <div class="feature-card">

                    <i class="bi bi-calculator feature-icon"></i>

                    <h4>Smart Calculator</h4>

                    <p>
                        Calculate the amount of rainwater that can be harvested using scientific formulas.
                    </p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="feature-card">

                    <i class="bi bi-clock-history feature-icon"></i>

                    <h4>Calculation History</h4>

                    <p>
                        Save and access previous calculations anytime from your dashboard.
                    </p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="feature-card">

                    <i class="bi bi-bar-chart-line feature-icon"></i>

                    <h4>Reports & Analytics</h4>

                    <p>
                        Generate reports and visualize water collection using interactive charts.
                    </p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="feature-card">

                    <i class="bi bi-droplet-half feature-icon"></i>

                    <h4>Water Conservation</h4>

                    <p>
                        Encourage sustainable water usage and reduce dependence on groundwater.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>
<!-- ================= ABOUT SECTION ================= -->

<section id="about" class="about py-5">

    <div class="container">

        <div class="row align-items-center">

            <!-- Left Side -->
            <div class="col-lg-6">

                <h2 class="fw-bold mb-4">
                    About Smart Rainwater Harvesting
                </h2>

                <p>
                    Rainwater harvesting is the process of collecting and storing rainwater for future use.
                    This project helps users estimate how much rainwater can be collected based on roof area,
                    rainfall, and runoff coefficient.
                </p>

                <p>
                    The system also stores calculation history, generates reports, and encourages sustainable
                    water management practices.
                </p>

                <ul class="list-unstyled mt-4">

                    <li class="mb-3">
                        <i class="bi bi-check-circle-fill text-primary"></i>
                        Accurate Rainwater Calculation
                    </li>

                    <li class="mb-3">
                        <i class="bi bi-check-circle-fill text-primary"></i>
                        Secure Calculation History
                    </li>

                    <li class="mb-3">
                        <i class="bi bi-check-circle-fill text-primary"></i>
                        Reports & Analytics
                    </li>

                    <li>
                        <i class="bi bi-check-circle-fill text-primary"></i>
                        Sustainable Water Conservation
                    </li>

                </ul>

            </div>

            <!-- Right Side -->
            <div class="col-lg-6 text-center">

                <i class="bi bi-droplet-half text-primary"
                   style="font-size:220px;"></i>

            </div>

        </div>

    </div>

</section>
<!-- ================= STATISTICS SECTION ================= -->

<section class="stats py-5">

    <div class="container">

        <div class="text-center mb-5">

            <h2 class="fw-bold">
                Project Statistics
            </h2>

            <p class="text-muted">
                Smart monitoring for efficient rainwater harvesting.
            </p>

        </div>

        <div class="row g-4">

            <div class="col-lg-3 col-md-6">

                <div class="stat-card">

                    <i class="bi bi-people-fill stat-icon"></i>

                    <h2 class="counter" data-target="<?= $totalUsers ?>">0</h2>

                    <p>Registered Users</p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="stat-card">

                    <i class="bi bi-calculator-fill stat-icon"></i>

                    <h2 class="counter" data-target="<?= $totalCalculations ?>">0</h2>

                    <p>Calculations</p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="stat-card">

                    <i class="bi bi-droplet-fill stat-icon"></i>

                    <h2 class="counter" data-target="<?= round($totalWater) ?>">0</h2>

                    <p>Litres Saved</p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="stat-card">

                    <i class="bi bi-globe2 stat-icon"></i>

                    <h2 class="counter" data-target="<?= $totalCities ?>">0</h2>

                    <p>Cities Covered</p>

                </div>

            </div>

        </div>

    </div>

</section>
<?php include 'includes/footer.php'; ?>