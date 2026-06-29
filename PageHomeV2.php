<?php /* Template Name: PageHomeV2 */ ?>
<?php get_header(); ?>
<link href="<?php echo get_stylesheet_directory_uri().'/assets/css/v2o/home-v2.css'; ?>" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
    /* Page-scoped overrides — kept inline to mirror existing pattern */
    .hero-section .hero-search .search-input{
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: #fcfcfc;
        font-size: 15px;
        margin-bottom: 14px;
    }
    .hero-section .hero-search .search-input::placeholder{
        color: rgba(252, 252, 252, .55);
    }
    .section-lumenore-suits .product-card .crd-img-containr{
        margin-top: 18px;
        border-radius: 12px;
        overflow: hidden;
    }
    .section-lumenore-suits .product-card .crd-img-containr img{
        width: 100%;
        height: auto;
        display: block;
    }
    .hero-datasrc img{
        height: 22px;
        margin: 0 6px;
        vertical-align: middle;
        opacity: .85;
    }
</style>

<?php
    /* ============================================================
     * SVG icon variables (page-local). Shared SVGs continue to
     * live in include/home-svgs.php and are pulled in below.
     * ------------------------------------------------------------ */
    require_once('include/home-svgs.php');

    $icon_analyst    = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16M6 17V9m6 8V5m6 12v-6"/></svg>';
    $icon_business   = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';
    $icon_scientist  = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v6L5 19a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-10V3"/><path d="M9 3h6"/></svg>';
    $icon_engineer   = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1.1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1.1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>';

    $icon_data_connect = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none"><path d="M24 6c10 0 18 2.6 18 6s-8 6-18 6S6 15.4 6 12s8-6 18-6Zm18 6v8c0 3.3-8 6-18 6S6 23.3 6 20v-8m36 8v8c0 3.3-8 6-18 6S6 31.3 6 28v-8m36 8v8c0 3.3-8 6-18 6S6 39.3 6 36v-8" stroke="#FCFCFC" stroke-width="2"/></svg>';
    $icon_ai_insight   = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none"><path d="M24 4v6m0 28v6M4 24h6m28 0h6M9.9 9.9l4.2 4.2m19.8 19.8 4.2 4.2M9.9 38.1l4.2-4.2m19.8-19.8 4.2-4.2" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="24" r="7" stroke="#FCFCFC" stroke-width="2"/></svg>';
    $icon_realtime     = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="#FCFCFC" stroke-width="2"/><path d="M24 14v10l7 4" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round"/></svg>';
    $icon_predictive   = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none"><path d="M6 36 18 22l8 8 16-20" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 10h10v10" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    $icon_visualize    = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="6" y="20" width="8" height="22" stroke="#FCFCFC" stroke-width="2"/><rect x="20" y="6" width="8" height="36" stroke="#FCFCFC" stroke-width="2"/><rect x="34" y="14" width="8" height="28" stroke="#FCFCFC" stroke-width="2"/></svg>';
    $icon_embedded     = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="6" y="8" width="36" height="26" rx="3" stroke="#FCFCFC" stroke-width="2"/><path d="M16 40h16M24 34v6" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round"/></svg>';

    $logo_seal  = '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="26" stroke="#9FBAE4" stroke-opacity=".3" stroke-width="1.5"/><circle cx="28" cy="28" r="14" fill="#0e48a5" fill-opacity=".4"/><circle cx="28" cy="28" r="7" fill="#12b6f8"/></svg>';
    $arrow_right = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
?>

<!-- ===== HERO SECTION START ===== -->
<section class="hero-section">
    <div class="container">
        <h1>Enterprise BI and Analytics Platform<br>Powered By <span class="accent-italic">AI Agents</span></h1>
        <p class="hero-sub">Go from data to decisions, faster with enterprise-grade AI-driven analytics platform built to make complex analysis tasks easier.</p>

        <div class="hero-search">
            <input type="text" class="search-input" placeholder="How was a customer churn data by brand?">
            <div class="search-tags">
                <span class="search-tag tag-cyan">⚡ Trends</span>
                <span class="search-tag tag-violet">Operations: Supply</span>
                <span class="search-tag tag-blue">Product: Deal</span>
            </div>
            <div class="search-cta">
                <p class="search-meta">Black Friday Retail</p>
                <button type="button" class="search-explore">Click to explore <?= $arrow_right; ?></button>
            </div>
        </div>

        <p class="hero-datasrc">Connect with 100+ data sources to analyze your data</p>
    </div>
</section>

<!-- ===== TRUSTED / LOGO MARQUEE ===== -->
<section class="trusted-section">
    <div class="container">
        <h2>Lumenore is Trusted By 20,000+ Users<br>Across 100+ Enterprise Teams</h2>

        <div class="logo-slider">
            <div class="logo-track">
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Birlasoft.webp'; ?>" loading="lazy" alt="Birlasoft" title="Birlasoft"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Blossom.webp'; ?>" loading="lazy" alt="Blossom" title="Blossom"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Ducont.webp'; ?>" loading="lazy" alt="Ducont" title="Ducont"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/FordCredit.webp'; ?>" loading="lazy" alt="FordCredit" title="FordCredit"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/NHM.webp'; ?>" loading="lazy" alt="NHM" title="NHM"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/RainforestAlliance.webp'; ?>" loading="lazy" alt="RainforestAlliance" title="RainforestAlliance"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Shortlist.webp'; ?>" loading="lazy" alt="Shortlist" title="Shortlist"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Bayer.webp'; ?>" loading="lazy" alt="Bayer" title="Bayer"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/SiriusXm.webp'; ?>" loading="lazy" alt="SiriusXm" title="SiriusXm"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/THK.webp'; ?>" loading="lazy" alt="THK" title="THK"></div>

                <!-- duplicate for seamless infinite scroll -->
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Birlasoft.webp'; ?>" loading="lazy" alt="Birlasoft" title="Birlasoft"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Blossom.webp'; ?>" loading="lazy" alt="Blossom" title="Blossom"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Ducont.webp'; ?>" loading="lazy" alt="Ducont" title="Ducont"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/FordCredit.webp'; ?>" loading="lazy" alt="FordCredit" title="FordCredit"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/NHM.webp'; ?>" loading="lazy" alt="NHM" title="NHM"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/RainforestAlliance.webp'; ?>" loading="lazy" alt="RainforestAlliance" title="RainforestAlliance"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Shortlist.webp'; ?>" loading="lazy" alt="Shortlist" title="Shortlist"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/Bayer.webp'; ?>" loading="lazy" alt="Bayer" title="Bayer"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/SiriusXm.webp'; ?>" loading="lazy" alt="SiriusXm" title="SiriusXm"></div>
                <div><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/client-logos/THK.webp'; ?>" loading="lazy" alt="THK" title="THK"></div>
            </div>
        </div>
    </div>
</section>

<!-- ===== LUMENORE SUITE OF PRODUCTS ===== -->
<section class="section-lumenore-suits">
    <div class="container">
        <h2>Lumenore’s Suite of Products<br>for Every Data Challenge</h2>
        <p class="section-sub">A connected platform of products — pick the one that fits your team, scale as you grow.</p>

        <div class="row g-4">
            <div class="col-lg-4 col-md-6">
                <div class="product-card">
                    <span class="product-tag">Insights</span>
                    <h4>Lumenore Insights</h4>
                    <p>Self-service dashboards, KPI tracking, and shareable storyboards for everyday business reporting.</p>
                    <a href="/lumenore-insights/" class="product-link">Learn more <?= $arrow_right; ?></a>
                    <div class="crd-img-containr">
                        <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/products/insights-thumb.webp'; ?>" loading="lazy" alt="Lumenore Insights">
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="product-card">
                    <span class="product-tag tag-violet">Ask Me</span>
                    <h4>Lumenore Ask Me</h4>
                    <p>Conversational analytics in natural language with built-in AI agents for RCA, prediction, and visualization.</p>
                    <a href="/lumenore-ask-me/" class="product-link">Learn more <?= $arrow_right; ?></a>
                    <div class="crd-img-containr">
                        <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/products/askme-thumb.webp'; ?>" loading="lazy" alt="Lumenore Ask Me">
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="product-card">
                    <span class="product-tag tag-cyan">Data Magnet</span>
                    <h4>Lumenore Data Magnet</h4>
                    <p>Low-code ETL and data pipelines that unify 100+ sources into a single, governed lakehouse.</p>
                    <a href="/lumenore-data-magnet/" class="product-link">Learn more <?= $arrow_right; ?></a>
                    <div class="crd-img-containr">
                        <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/products/datamagnet-thumb.webp'; ?>" loading="lazy" alt="Lumenore Data Magnet">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== FEATURES AND CAPABILITIES ===== -->
<section class="section-feature-capabilities">
    <div class="container">
        <h2 class="section-title text-center">Features and Capabilities<br>That’ll Help 10x Your Business Impact</h2>

        <div class="row g-4">
            <div class="col-lg-4 col-md-6">
                <div class="feature-card">
                    <?= $icon_data_connect; ?>
                    <h5>Data Integration</h5>
                    <p>Connect and bring data from varied sources using in-built ETL and multiple data source connectors.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="feature-card">
                    <?= $icon_ai_insight; ?>
                    <h5>AI Agents</h5>
                    <p>A force of AI Agents assisting in root cause analysis, prediction, visualization, and more.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="feature-card">
                    <?= $icon_realtime; ?>
                    <h5>Real-Time Data Sync</h5>
                    <p>Low-latency ingestion from Kafka and event streams for up-to-the-moment insights.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="feature-card">
                    <?= $icon_predictive; ?>
                    <h5>Predictive Analytics</h5>
                    <p>Forecast trends, anticipate risks, and explore future scenarios with built-in modeling.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="feature-card">
                    <?= $icon_visualize; ?>
                    <h5>Data Visualization</h5>
                    <p>Interactive dashboards and storyboards built with 100+ chart and graph types.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="feature-card">
                    <?= $icon_embedded; ?>
                    <h5>Embedded Analytics</h5>
                    <p>Bring dashboards and insights directly into your business applications via APIs.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== BUILT FOR EVERYONE (persona tabs) ===== -->
<section class="section-built-for-everyone">
    <div class="container">
        <h2>Lumenore is Built for Everyone</h2>
        <p class="section-sub">Whether you build pipelines, answer business questions, run the company, or just need data without filing a ticket — Lumenore was made for you.</p>

        <div class="persona-tabs" id="personaTabs">
            <button type="button" class="persona-tab active" data-persona="analyst">
                <span class="persona-icon"><?= $icon_analyst; ?></span>
                <span class="persona-meta">
                    <span class="persona-name">The Analyst</span>
                    <span class="persona-role">Data Analysts &amp; Business Users</span>
                </span>
            </button>
            <button type="button" class="persona-tab" data-persona="business">
                <span class="persona-icon"><?= $icon_business; ?></span>
                <span class="persona-meta">
                    <span class="persona-name">The Business User</span>
                    <span class="persona-role">Business Leaders</span>
                </span>
            </button>
            <button type="button" class="persona-tab" data-persona="scientist">
                <span class="persona-icon"><?= $icon_scientist; ?></span>
                <span class="persona-meta">
                    <span class="persona-name">Data Scientists</span>
                    <span class="persona-role">Quant &amp; ML Engineers</span>
                </span>
            </button>
            <button type="button" class="persona-tab" data-persona="engineer">
                <span class="persona-icon"><?= $icon_engineer; ?></span>
                <span class="persona-meta">
                    <span class="persona-name">The Engineer</span>
                    <span class="persona-role">Data Engineers</span>
                </span>
            </button>
        </div>

        <div class="persona-content" id="personaContent">
            <div class="persona-text">
                <span class="persona-pill">Data Analysts &amp; Business Users</span>
                <h3 id="personaTitle">Turn questions into insights without waiting on anyone.</h3>
                <p id="personaDesc">Equip analysts and business users with self-service analytics that are simple to use and quick to deploy. Exploring data, uncovering insights, and sharing results becomes effortless.</p>
                <div class="feature-chips" id="personaChips">
                    <span class="feature-chip">Natural language queries</span>
                    <span class="feature-chip">100+ chart types</span>
                    <span class="feature-chip">Self-service exploration</span>
                </div>
            </div>
            <div class="persona-preview">
                <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/personas/analyst-workspace.webp'; ?>" loading="lazy" alt="Analyst workspace preview" id="personaImage">
            </div>
        </div>
    </div>
</section>

<!-- ===== PRICING — EXPLORE THE RIGHT WAY ===== -->
<section class="section-pricing-explore">
    <div class="container">
        <h2>Explore the Right Way to Get Started</h2>

        <div class="pricing-tabs" id="pricingTabs">
            <button type="button" class="pricing-tab tab-freemium active" data-plan="freemium">
                <span class="ptab-name">🌱 Freemium</span>
                <span class="ptab-role">For Individuals &amp; Small Teams</span>
            </button>
            <button type="button" class="pricing-tab tab-enterprise" data-plan="enterprise">
                <span class="ptab-name">🟠 Enterprise</span>
                <span class="ptab-role">For Organizations &amp; Scale</span>
            </button>
        </div>

        <div class="pricing-grid" id="pricingGrid">
            <div class="pricing-card">
                <h4>Start answering your data questions independently.</h4>
                <p class="pricing-note">No Credit Card, No Setup.</p>
                <ul class="feature-list">
                    <li>Connect necessary data sources with simple daily refresh</li>
                    <li>Analyze important, operational datasets</li>
                    <li>Build basic dashboards quickly</li>
                    <li>Use conversational analytics for light, ad-hoc querying</li>
                    <li>Designed for individual, self-service analytics</li>
                </ul>
                <a href="/pricing/" class="btn btnp btn-v2gradient">Compare Freemium vs Enterprise <?= $arrow_right; ?></a>
            </div>

            <div class="pricing-card is-highlight">
                <h4>Bring your data in. Keep it up to date</h4>
                <ul class="feature-list" style="background:transparent;">
                    <li style="background:rgba(252,252,252,.08);color:#fcfcfc;">Connect files and databases without complex setup</li>
                    <li style="background:rgba(252,252,252,.08);color:#fcfcfc;">Refresh data automatically on a daily schedule</li>
                    <li style="background:rgba(252,252,252,.08);color:#fcfcfc;">Work with up-to-date numbers without manual effort</li>
                </ul>
                <div class="stat-big">60%</div>
                <div class="stat-caption">Less time spent managing data updates.</div>
            </div>
        </div>
    </div>
</section>

<!-- ===== SUCCESS STORIES ===== -->
<section class="success-section">
    <div class="container">
        <h2>Proven Track Record: Our Success Stories</h2>

        <div class="row g-4 justify-content-center">
            <div class="col-md-4 col-sm-6">
                <a href="/reducing-recidivism-in-mental-health/">
                    <div class="story-card">
                        <div class="story-image">
                            <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/Leading-behavioral-Thumbnail.webp'; ?>" alt="Behavioral Healthcare Provider">
                        </div>
                        <div class="story-body">
                            <b>Success Story</b>
                            <p>Reducing Recidivism in Behavioral Health with AI-Powered Analytics</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="/automotiveoemcasestudy/">
                    <div class="story-card">
                        <div class="story-image">
                            <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/AutomotiveOEM-Thumbnail.webp'; ?>" alt="Automotive OEM">
                        </div>
                        <div class="story-body">
                            <b>Success Story</b>
                            <p>How THK Rhythm Automotive Optimized Production with Lumenore</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-4 col-sm-6">
                <a href="/agriculture-case-study/">
                    <div class="story-card">
                        <div class="story-image">
                            <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/LeadingAgriCompany-Thumbnail.webp'; ?>" alt="Agri Company">
                        </div>
                        <div class="story-body">
                            <b>Success Story</b>
                            <p>Unifying Crop, Channel, and Campaign Data with AI-Powered Analytics</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div class="view-all-wrap">
            <a href="/success-stories/" class="btn btnp btn-v2outline">View all stories <?= $arrow_right; ?></a>
        </div>
    </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="testimonial-section">
    <div class="container">
        <h2 class="text-center">Hear What Our Customers Have To Say</h2>

        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="testimonial-card">
                        <p class="testimonial-text">“Lumenore’s unified analytics platform replaced our manual reporting and helped us cut reporting cycles by 30%, with real-time data integration our business users actually trust.”</p>
                        <p class="testimonial-name mb-0">Sara Mohammad Alblooshi</p>
                        <p class="about-testimo mb-0">Application Head, Department of Digital Ajman</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial-card">
                        <p class="testimonial-text">“With Lumenore’s customized dashboards and predictive insights, we’ve gained a competitive edge — informed decisions, made faster and more accurately.”</p>
                        <p class="testimonial-name mb-0">Arvind Patkar</p>
                        <p class="about-testimo mb-0">Founder &amp; CEO, ARAMSEC Company Limited</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial-card">
                        <p class="testimonial-text">“The intuitive, no-code platform democratized data access. Our clients build interactive dashboards and explore real-time data without relying on IT.”</p>
                        <p class="testimonial-name mb-0">Vicente Ciampa</p>
                        <p class="about-testimo mb-0">CEO, Xonit.net</p>
                    </div>
                </div>
            </div>

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
            </div>
        </div>
    </div>
</section>

<!-- ===== TRUST & SECURITY + BEFORE YOU DECIDE + CTA ===== -->
<section class="section-trust-security">
    <div class="container">
        <div class="trust-row">
            <h2 class="mb-0">Trusted Standards for<br>Complete Data Security</h2>
            <div class="trust-badges">
                <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/compliance/hipaa.webp'; ?>" loading="lazy" alt="HIPAA">
                <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/compliance/gdpr.webp'; ?>" loading="lazy" alt="GDPR">
                <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/compliance/aicpa-soc2.webp'; ?>" loading="lazy" alt="AICPA SOC 2">
            </div>
        </div>

        <div class="before-decide">
            <div>
                <h3>Before you decide</h3>
                <p class="lead-text">Everything your team, IT, and procurement need to evaluate Lumenore — covered in one place.</p>
            </div>
            <ul class="decide-list">
                <li>Free 14-day enterprise trial — no credit card required</li>
                <li>Architecture reviews and proof-of-concept support</li>
                <li>SOC 2, HIPAA, and GDPR aligned by default</li>
                <li>SSO, role-based access, and audit logs out of the box</li>
                <li>White-glove onboarding and dedicated success manager</li>
                <li>Predictable, per-workspace pricing — no per-query surprises</li>
            </ul>
        </div>

        <div class="contact-cta">
            <div class="cta-content">
                <div class="cta-text">
                    <h3>Got more questions?</h3>
                    <p>Our team is here to answer any questions or customize the perfect plan for you.</p>
                </div>
                <a href="/contact/" class="cta-button">Get in Touch</a>
            </div>
        </div>
    </div>
</section>

<!-- ===== FOOTER (page-level — overrides theme footer) ===== -->
<footer class="site-footer">
    <div class="container">
        <div class="footer-nav">
            <div class="brand-col footer-col">
                <div class="brand-logo">
                    <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/logo-lumenore-white.svg'; ?>" alt="Lumenore" class="brand-mark">
                    <img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/great-place-to-work.webp'; ?>" alt="Great Place to Work" class="gptw-badge">
                </div>

                <div class="ask-ai-box">
                    <p>Ask AI for a summary<br>about Lumenore</p>
                    <div class="ask-ai-icons">
                        <a href="#" aria-label="ChatGPT"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/ai-icons/chatgpt.svg'; ?>" width="20" height="20" alt="ChatGPT"></a>
                        <a href="#" aria-label="Gemini"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/ai-icons/gemini.svg'; ?>" width="20" height="20" alt="Gemini"></a>
                        <a href="#" aria-label="Perplexity"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/ai-icons/perplexity.svg'; ?>" width="20" height="20" alt="Perplexity"></a>
                        <a href="#" aria-label="Claude"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/ai-icons/claude.svg'; ?>" width="20" height="20" alt="Claude"></a>
                        <a href="#" aria-label="Copilot"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/ai-icons/copilot.svg'; ?>" width="20" height="20" alt="Copilot"></a>
                    </div>
                </div>

                <p class="follow-us-label">Follow Us</p>
                <div class="social-list">
                    <a href="#" aria-label="X / Twitter"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/social/x.svg'; ?>" width="14" height="14" alt="X"></a>
                    <a href="#" aria-label="LinkedIn"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/social/linkedin.svg'; ?>" width="14" height="14" alt="LinkedIn"></a>
                    <a href="#" aria-label="YouTube"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/social/youtube.svg'; ?>" width="14" height="14" alt="YouTube"></a>
                    <a href="#" aria-label="Instagram"><img src="<?php echo get_stylesheet_directory_uri().'/assets/images/homeV2o/social/instagram.svg'; ?>" width="14" height="14" alt="Instagram"></a>
                </div>
            </div>

            <div class="footer-col">
                <h4>Platform</h4>
                <ul class="link-list">
                    <li><a href="/why-us/">Why Us</a></li>
                    <li><a href="/trust-and-security/">Trust and Security</a></li>
                    <li><a href="/partners/">Partners</a></li>
                    <li><a href="/professional-services/">Professional Services</a></li>
                    <li><a href="/platform/">Platform</a></li>
                    <li><a href="/release-notes/">Latest Releases</a></li>
                    <li><a href="/watch-demo/">Watch Demo</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Capabilities</h4>
                <ul class="link-list">
                    <li><a href="/data-connectors/">Data Connectors</a></li>
                    <li><a href="/data-integration/">Data Integration</a></li>
                    <li><a href="/data-lakehouse/">Data Lakehouse</a></li>
                    <li><a href="/data-visualization/">Data Visualization</a></li>
                    <li><a href="/data-universe/">Data Universe</a></li>
                    <li><a href="/dashboard/">Dashboard</a></li>
                    <li><a href="/advanced-analytics/">Advanced Analytics</a></li>
                    <li><a href="/embedded-analytics/">Embedded Analytics</a></li>
                    <li><a href="/conversational-intelligence/">Conversational Intelligence</a></li>
                    <li><a href="/decision-intelligence/">Decision Intelligence</a></li>
                    <li><a href="/self-service-analytics/">Self-Service Analytics</a></li>
                    <li><a href="/predictive-analytics/">Predictive Analytics</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Product</h4>
                <ul class="link-list">
                    <li><a href="/lumenore-insights/">Lumenore Insights</a></li>
                    <li><a href="/lumenore-ask-me/">Lumenore Ask Me</a></li>
                    <li><a href="/lumenore-data-magnet/">Lumenore Data Magnet</a></li>
                </ul>

                <h4 class="col-spaced">Pricing</h4>
                <ul class="link-list">
                    <li><a href="/pricing/insights/">Lumenore Insights Pricing</a></li>
                </ul>

                <h4 class="col-spaced">Compare</h4>
                <ul class="link-list">
                    <li><a href="/tableau-alternative/">Tableau Alternative</a></li>
                    <li><a href="/thoughtspot-alternative/">ThoughtSpot Alternative</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Solutions</h4>
                <ul class="link-list">
                    <li><a href="/solutions/by-industry/">By Industry</a></li>
                    <li><a href="/solutions/by-department/">By Department</a></li>
                </ul>

                <h4 class="col-spaced">Company</h4>
                <ul class="link-list">
                    <li><a href="/about-us/">About Us</a></li>
                    <li><a href="/career/">Career</a></li>
                    <li><a href="/newsroom/">Newsroom</a></li>
                    <li><a href="/contact/">Contact Us</a></li>
                    <li><a href="/contact-sales/">Contact Sales</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Resources</h4>
                <ul class="link-list">
                    <li><a href="/request-a-demo/">Request Demo</a></li>
                    <li><a href="/community-support/">Community Support</a></li>
                    <li><a href="/news-and-media/">News &amp; Media</a></li>
                    <li><a href="/ebooks-whitepapers/">Ebooks &amp; Whitepapers</a></li>
                    <li><a href="/success-stories/">Success Stories</a></li>
                    <li><a href="/use-cases/">Use Cases</a></li>
                    <li><a href="/blog/">Blogs</a></li>
                    <li><a href="/events/">Events</a></li>
                    <li><a href="/knowledge-base/">Knowledge Base</a></li>
                    <li><a href="/certifications/">Certifications</a></li>
                </ul>
            </div>
        </div>

        <div class="copyright">
            <p>© <?php echo date('Y'); ?> Lumenore Inc. All rights reserved.</p>
            <div class="legal-links">
                <a href="/privacy/">Privacy</a>
                <a href="/terms/">Terms of Use</a>
                <a href="/cookies/">Cookies Settings</a>
                <a href="/license/">License Agreement</a>
            </div>
        </div>
    </div>
</footer>

<!-- ===== SCRIPTS ===== -->
<script nonce="lrqubatlumetrnsha123s34dff5gt5">
    $(window).on("scroll", function () {
        $(window).scrollTop() ? $(".headerTop").addClass("black") : $(".headerTop").removeClass("black");
    });
    $(document).ready(function () {
        $(".menu h4").click(function () { $("nav ul").toggleClass("active"); });
    });
</script>

<script nonce="lrqubatlumetrnsha123s34dff5gt5">
    // Persona tabs — swap title/desc/chips/image when a tab is clicked.
    const personaData = {
        analyst: {
            pill: 'Data Analysts & Business Users',
            title: 'Turn questions into insights without waiting on anyone.',
            desc: 'Equip analysts and business users with self-service analytics that are simple to use and quick to deploy. Exploring data, uncovering insights, and sharing results becomes effortless.',
            chips: ['Natural language queries', '100+ chart types', 'Self-service exploration'],
            image: '/assets/images/homeV2o/personas/analyst-workspace.webp'
        },
        business: {
            pill: 'Business Leaders',
            title: 'Make smarter decisions, faster — across web, mobile, and embedded.',
            desc: 'Increase revenue, reduce costs, and stay agile in real time. Empower every team with accessible insights when and where they need them.',
            chips: ['Real-time KPI tracking', 'Executive dashboards', 'Alerting & narratives'],
            image: '/assets/images/homeV2o/personas/business-workspace.webp'
        },
        scientist: {
            pill: 'Data Scientists',
            title: 'Build, test, and deploy models without leaving the platform.',
            desc: 'Use AutoML for no-code development or the Python code studio for custom modeling. Train, test, deploy, and manage models alongside your data.',
            chips: ['AutoML pipelines', 'Python code studio', 'Model monitoring'],
            image: '/assets/images/homeV2o/personas/scientist-workspace.webp'
        },
        engineer: {
            pill: 'Data Engineers',
            title: 'Ship reliable pipelines without yak-shaving ETL.',
            desc: 'Simplified ETL with a visual interface for building and managing data flows. Streamlined data preparation and observability for production-grade pipelines.',
            chips: ['Low-code ETL', 'Lakehouse storage', 'Schema observability'],
            image: '/assets/images/homeV2o/personas/engineer-workspace.webp'
        }
    };

    const personaTabs   = document.querySelectorAll('.persona-tab');
    const personaPill   = document.querySelector('.persona-text .persona-pill');
    const personaTitle  = document.getElementById('personaTitle');
    const personaDesc   = document.getElementById('personaDesc');
    const personaChips  = document.getElementById('personaChips');
    const personaImage  = document.getElementById('personaImage');
    const themeUriRoot  = '<?php echo get_stylesheet_directory_uri(); ?>';

    function activatePersona(key) {
        const data = personaData[key];
        if (!data) return;
        personaTabs.forEach(t => t.classList.toggle('active', t.dataset.persona === key));
        personaPill.textContent = data.pill;
        personaTitle.textContent = data.title;
        personaDesc.textContent = data.desc;
        personaChips.innerHTML = data.chips.map(c => `<span class="feature-chip">${c}</span>`).join('');
        personaImage.src = themeUriRoot + data.image;
        personaImage.alt = data.title;
    }

    personaTabs.forEach(tab => {
        tab.addEventListener('click', () => activatePersona(tab.dataset.persona));
    });
</script>

<script nonce="lrqubatlumetrnsha123s34dff5gt5">
    // Pricing tabs — toggles between Freemium and Enterprise content variants.
    const pricingTabs = document.querySelectorAll('.pricing-tab');
    const pricingGrid = document.getElementById('pricingGrid');
    const pricingData = {
        freemium: pricingGrid.innerHTML,
        enterprise: `
            <div class="pricing-card">
                <h4>Scale analytics across the entire organization.</h4>
                <p class="pricing-note">Dedicated success team + custom contracts.</p>
                <ul class="feature-list">
                    <li>Unlimited connectors and workspaces</li>
                    <li>Role-based access, SSO, and audit logs</li>
                    <li>Embedded analytics and white-label dashboards</li>
                    <li>Predictive analytics and AI Agents</li>
                    <li>24×7 enterprise support and SLAs</li>
                </ul>
                <a href="/pricing/" class="btn btnp btn-v2gradient">Compare Freemium vs Enterprise</a>
            </div>
            <div class="pricing-card is-highlight" style="background:linear-gradient(135deg,#0e48a5 0%,#04142d 100%);">
                <h4>Govern data without slowing down teams</h4>
                <ul class="feature-list" style="background:transparent;">
                    <li style="background:rgba(252,252,252,.08);color:#fcfcfc;">Centralized governance and lineage</li>
                    <li style="background:rgba(252,252,252,.08);color:#fcfcfc;">Reusable semantic layer across products</li>
                    <li style="background:rgba(252,252,252,.08);color:#fcfcfc;">Automated quality and freshness checks</li>
                </ul>
                <div class="stat-big">3x</div>
                <div class="stat-caption">Faster rollout of new analytics use cases.</div>
            </div>
        `
    };

    pricingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            pricingTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            pricingGrid.innerHTML = pricingData[tab.dataset.plan];
        });
    });
</script>

<?php /* footer is rendered directly above; theme footer is intentionally omitted to keep page-scoped styles */ ?>
