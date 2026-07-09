(function () {
    'use strict';

    /* ── Constants ─────────────────────────────────────────────── */
    var CYAN       = '#1CA9C9';
    var VIOLET     = '#55298E';
    var CYAN_RGB   = '28,169,201';
    var VIOLET_RGB = '85,41,142';

    var GRID_COLS = 6;
    var GRID_ROWS = 4;
    var GRID_GAP  = 6;

    /* ── Blog topics ───────────────────────────────────────────── */
    var TOPICS = [
        { tag: 'AI Agents',              title: 'Autonomous Anomaly Detection at Scale',        accent: CYAN },
        { tag: 'NLQ Analytics',          title: 'Ask Your Data in Plain English',               accent: VIOLET },
        { tag: 'Semantic Layer',         title: 'One Metric, Every Dashboard',                  accent: CYAN },
        { tag: 'Data Pipelines',         title: 'Low-Code ETL at Enterprise Scale',             accent: VIOLET },
        { tag: 'Predictive Analytics',   title: 'Forecast Before the Quarter Closes',           accent: CYAN },
        { tag: 'MCP',                    title: 'Context Protocol for Enterprise AI',           accent: VIOLET },
        { tag: 'Data Modeling',          title: 'Semantic Modeling for Self-Service',           accent: CYAN },
        { tag: 'Decision Intelligence',  title: 'From Descriptive to Prescriptive',             accent: VIOLET },
        { tag: 'Knowledge Graphs',       title: 'Entity Context for AI Reasoning',              accent: CYAN },
        { tag: 'Autonomous Insights',    title: 'Insights Before You Ask',                      accent: VIOLET },
        { tag: 'Agentic RAG',            title: 'Beyond Simple Document Retrieval',             accent: CYAN },
        { tag: 'Vector Search',          title: 'Semantic Similarity at Enterprise Scale',      accent: VIOLET },
        { tag: 'Anomaly Detection',      title: 'Real-Time Spike Identification',               accent: CYAN },
        { tag: 'Data Streaming',         title: 'Streaming vs Batch Tradeoffs',                 accent: VIOLET },
        { tag: 'AI Governance',          title: 'Governing LLMs in Production',                 accent: CYAN },
        { tag: 'Embedded Analytics',     title: 'Bring BI Into Your Product',                   accent: VIOLET },
        { tag: 'Data Lakehouse',         title: 'One Platform for All Data Types',              accent: CYAN },
        { tag: 'Root Cause Analysis',    title: 'Why Anomalies Actually Happen',                accent: VIOLET },
        { tag: 'Self-Service BI',        title: 'Empower Every Business User',                  accent: CYAN },
        { tag: 'Predictive Modeling',    title: 'Time-Series Models at Scale',                  accent: VIOLET },
        { tag: 'Agent Orchestration',    title: 'Chaining AI Agents Reliably',                  accent: CYAN },
        { tag: 'Data Quality',           title: 'Catching Bad Data Before It Ships',            accent: VIOLET },
        { tag: 'LLM Fine-Tuning',        title: 'Domain-Specific Models for Analytics',        accent: CYAN },
        { tag: 'Real-Time Analytics',    title: 'Sub-Second Insights on Live Data',             accent: VIOLET },
        { tag: 'Feature Stores',         title: 'Reusable ML Features Across Teams',            accent: CYAN },
        { tag: 'Observability',          title: 'Monitoring AI Pipelines End-to-End',           accent: VIOLET },
        { tag: 'Multi-Agent Systems',    title: 'Coordinating Agents Across Workflows',         accent: CYAN },
        { tag: 'Data Contracts',         title: 'Enforcing Schema at the Source',               accent: VIOLET },
        { tag: 'Prompt Engineering',     title: 'Reliable Outputs from Analytical LLMs',       accent: CYAN },
        { tag: 'Column-Level Security',  title: 'Fine-Grained Access in BI Tools',             accent: VIOLET },
        { tag: 'Cost Analytics',         title: 'Cloud Spend Intelligence at Scale',            accent: CYAN },
        { tag: 'Metric Layers',          title: 'Single Source of Truth for KPIs',             accent: VIOLET },
        { tag: 'Graph Analytics',        title: 'Traversing Relationships in Data',             accent: CYAN },
        { tag: 'Conversational BI',      title: 'Chat-First Analytics for Executives',         accent: VIOLET },
        { tag: 'Data Mesh',              title: 'Decentralised Ownership at Scale',             accent: CYAN },
        { tag: 'MLOps',                  title: 'Deploying Models Without the Toil',            accent: VIOLET },
        { tag: 'Supply Chain AI',        title: 'Demand Signals from Noisy Data',              accent: CYAN },
        { tag: 'Revenue Intelligence',   title: 'Pipeline Forecasting with AI',                 accent: VIOLET },
        { tag: 'HR Analytics',           title: 'Predicting Attrition Before It Happens',      accent: CYAN },
        { tag: 'Customer 360',           title: 'Unified Profiles Across Every Channel',        accent: VIOLET }
    ];

    /* ── SVG graphic strings (14 unique visualizations) ────────── */
    var SVGS = [
        /* 0 — Neural Network */
        '<svg viewBox="0 0 200 120" fill="none"><circle cx="28" cy="32" r="5" stroke="#1CA9C9" stroke-width="1.4" class="bnp"/><circle cx="28" cy="88" r="5" stroke="#1CA9C9" stroke-width="1.4" class="bnp" style="animation-delay:.6s"/><circle cx="100" cy="18" r="5" stroke="#55298E" stroke-width="1.4" class="bnp" style="animation-delay:.2s"/><circle cx="100" cy="60" r="5" stroke="#55298E" stroke-width="1.4" class="bnp" style="animation-delay:.9s"/><circle cx="100" cy="102" r="5" stroke="#55298E" stroke-width="1.4" class="bnp" style="animation-delay:.5s"/><circle cx="172" cy="38" r="5" stroke="#1CA9C9" stroke-width="1.4" class="bnp" style="animation-delay:.3s"/><circle cx="172" cy="82" r="5" stroke="#1CA9C9" stroke-width="1.4" class="bnp" style="animation-delay:.8s"/><line x1="33" y1="32" x2="95" y2="18" stroke="#1CA9C9" stroke-width="0.7" opacity="0.4" class="bld"/><line x1="33" y1="32" x2="95" y2="60" stroke="#1CA9C9" stroke-width="0.7" opacity="0.4" class="bld" style="animation-delay:-.6s"/><line x1="33" y1="32" x2="95" y2="102" stroke="#1CA9C9" stroke-width="0.7" opacity="0.25" class="bld" style="animation-delay:-1.2s"/><line x1="33" y1="88" x2="95" y2="60" stroke="#1CA9C9" stroke-width="0.7" opacity="0.4" class="bld" style="animation-delay:-.9s"/><line x1="33" y1="88" x2="95" y2="102" stroke="#1CA9C9" stroke-width="0.7" opacity="0.4" class="bld" style="animation-delay:-1.5s"/><line x1="105" y1="18" x2="167" y2="38" stroke="#55298E" stroke-width="0.7" opacity="0.4" class="bld" style="animation-delay:-.4s"/><line x1="105" y1="60" x2="167" y2="38" stroke="#55298E" stroke-width="0.7" opacity="0.4" class="bld" style="animation-delay:-.8s"/><line x1="105" y1="60" x2="167" y2="82" stroke="#55298E" stroke-width="0.7" opacity="0.4" class="bld" style="animation-delay:-1s"/><line x1="105" y1="102" x2="167" y2="82" stroke="#55298E" stroke-width="0.7" opacity="0.4" class="bld" style="animation-delay:-1.6s"/></svg>',

        /* 1 — Waveform bars */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="10" y1="106" x2="190" y2="106" stroke="#55298E" stroke-width="0.7" opacity="0.25"/><rect x="14" y="54" width="12" height="52" rx="2" fill="#55298E" fill-opacity="0.45" class="bgp"/><rect x="31" y="40" width="12" height="66" rx="2" fill="#1CA9C9" fill-opacity="0.36" class="bgp" style="animation-delay:.18s"/><rect x="48" y="28" width="12" height="78" rx="2" fill="#55298E" fill-opacity="0.46" class="bgp" style="animation-delay:.36s"/><rect x="65" y="46" width="12" height="60" rx="2" fill="#1CA9C9" fill-opacity="0.36" class="bgp" style="animation-delay:.54s"/><rect x="82" y="18" width="12" height="88" rx="2" fill="#55298E" fill-opacity="0.56" class="bgp" style="animation-delay:.72s"/><rect x="99" y="36" width="12" height="70" rx="2" fill="#1CA9C9" fill-opacity="0.4" class="bgp" style="animation-delay:.9s"/><rect x="116" y="50" width="12" height="56" rx="2" fill="#55298E" fill-opacity="0.36" class="bgp" style="animation-delay:1.08s"/><rect x="133" y="38" width="12" height="68" rx="2" fill="#1CA9C9" fill-opacity="0.46" class="bgp" style="animation-delay:1.26s"/><rect x="150" y="26" width="12" height="80" rx="2" fill="#55298E" fill-opacity="0.5" class="bgp" style="animation-delay:1.44s"/><rect x="167" y="52" width="12" height="54" rx="2" fill="#1CA9C9" fill-opacity="0.36" class="bgp" style="animation-delay:1.62s"/></svg>',

        /* 2 — Semantic layers */
        '<svg viewBox="0 0 200 120" fill="none"><rect x="30" y="14" width="140" height="22" rx="3" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.08)"/><rect x="18" y="50" width="164" height="22" rx="3" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.08)"/><rect x="30" y="86" width="140" height="22" rx="3" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.07)"/><line x1="68" y1="36" x2="63" y2="50" stroke="#1CA9C9" stroke-width="0.9" opacity="0.45" class="bld"/><line x1="100" y1="36" x2="100" y2="50" stroke="#55298E" stroke-width="0.9" opacity="0.45" class="bld" style="animation-delay:-.5s"/><line x1="132" y1="36" x2="137" y2="50" stroke="#1CA9C9" stroke-width="0.9" opacity="0.45" class="bld" style="animation-delay:-1s"/><line x1="68" y1="72" x2="68" y2="86" stroke="#55298E" stroke-width="0.9" opacity="0.45" class="bld" style="animation-delay:-.3s"/><line x1="100" y1="72" x2="100" y2="86" stroke="#1CA9C9" stroke-width="0.9" opacity="0.45" class="bld" style="animation-delay:-.8s"/><line x1="132" y1="72" x2="132" y2="86" stroke="#55298E" stroke-width="0.9" opacity="0.45" class="bld" style="animation-delay:-1.3s"/><circle cx="68" cy="36" r="2.5" fill="#1CA9C9" opacity="0.6" class="bnp"/><circle cx="100" cy="36" r="2.5" fill="#55298E" opacity="0.6" class="bnp" style="animation-delay:.4s"/><circle cx="132" cy="36" r="2.5" fill="#1CA9C9" opacity="0.6" class="bnp" style="animation-delay:.8s"/><circle cx="68" cy="72" r="2.5" fill="#55298E" opacity="0.6" class="bnp" style="animation-delay:.2s"/><circle cx="100" cy="72" r="2.5" fill="#1CA9C9" opacity="0.6" class="bnp" style="animation-delay:.6s"/><circle cx="132" cy="72" r="2.5" fill="#55298E" opacity="0.6" class="bnp" style="animation-delay:1s"/></svg>',

        /* 3 — ETL Flow */
        '<svg viewBox="0 0 200 120" fill="none"><rect x="8" y="44" width="48" height="32" rx="4" stroke="#55298E" stroke-width="1.2" fill="rgba(85,41,142,0.1)"/><rect x="76" y="44" width="48" height="32" rx="4" stroke="#1CA9C9" stroke-width="1.2" fill="rgba(28,169,201,0.1)"/><rect x="144" y="44" width="48" height="32" rx="4" stroke="#55298E" stroke-width="1.2" fill="rgba(85,41,142,0.1)"/><line x1="56" y1="60" x2="76" y2="60" stroke="#1CA9C9" stroke-width="1.1" opacity="0.55" class="bld"/><line x1="124" y1="60" x2="144" y2="60" stroke="#55298E" stroke-width="1.1" opacity="0.55" class="bld" style="animation-delay:-.8s"/><polyline points="72,56 76,60 72,64" stroke="#1CA9C9" stroke-width="1.1" fill="none" opacity="0.6"/><polyline points="140,56 144,60 140,64" stroke="#55298E" stroke-width="1.1" fill="none" opacity="0.6"/><ellipse cx="32" cy="53" rx="9" ry="3.5" stroke="#55298E" stroke-width="0.9" fill="none" opacity="0.7"/><line x1="23" y1="53" x2="23" y2="65" stroke="#55298E" stroke-width="0.9" opacity="0.55"/><line x1="41" y1="53" x2="41" y2="65" stroke="#55298E" stroke-width="0.9" opacity="0.55"/><ellipse cx="32" cy="65" rx="9" ry="3.5" stroke="#55298E" stroke-width="0.9" fill="none" opacity="0.45"/><circle cx="100" cy="60" r="7" stroke="#1CA9C9" stroke-width="0.9" fill="none" opacity="0.6" class="bld"/><circle cx="100" cy="60" r="2.5" fill="#1CA9C9" fill-opacity="0.5" class="bnp"/><line x1="168" y1="50" x2="168" y2="68" stroke="#55298E" stroke-width="1.2" opacity="0.7"/><polyline points="164,64 168,68 172,64" stroke="#55298E" stroke-width="1.2" fill="none" opacity="0.7"/><line x1="160" y1="70" x2="176" y2="70" stroke="#55298E" stroke-width="1" opacity="0.45"/></svg>',

        /* 4 — Forecast chart */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="24" y1="18" x2="24" y2="100" stroke="#1CA9C9" stroke-width="0.5" opacity="0.2"/><line x1="24" y1="100" x2="190" y2="100" stroke="#1CA9C9" stroke-width="0.5" opacity="0.2"/><line x1="24" y1="74" x2="190" y2="74" stroke="#1CA9C9" stroke-width="0.4" opacity="0.12" stroke-dasharray="3 3"/><line x1="24" y1="50" x2="190" y2="50" stroke="#1CA9C9" stroke-width="0.4" opacity="0.12" stroke-dasharray="3 3"/><line x1="24" y1="26" x2="190" y2="26" stroke="#1CA9C9" stroke-width="0.4" opacity="0.12" stroke-dasharray="3 3"/><path d="M24,90 C44,84 56,80 76,67 C91,57 102,62 116,46" stroke="#1CA9C9" stroke-width="1.6" fill="none" opacity="0.72" stroke-linecap="round"/><path d="M116,46 C131,33 147,29 166,23 C173,21 181,19 190,17" stroke="#55298E" stroke-width="1.4" fill="none" opacity="0.6" stroke-dasharray="5 4" stroke-linecap="round"/><path d="M116,46 C131,33 147,29 166,23 C173,21 181,19 190,17 L190,100 L116,100 Z" fill="#55298E" fill-opacity="0.055"/><line x1="116" y1="18" x2="116" y2="100" stroke="#55298E" stroke-width="0.8" opacity="0.28" stroke-dasharray="3 2"/><circle cx="24" cy="90" r="3" fill="#1CA9C9" opacity="0.65" class="bnp"/><circle cx="76" cy="67" r="3" fill="#1CA9C9" opacity="0.65" class="bnp" style="animation-delay:.45s"/><circle cx="116" cy="46" r="3.5" fill="#1CA9C9" opacity="0.85" class="bnp" style="animation-delay:.9s"/><circle cx="166" cy="23" r="3" fill="#55298E" opacity="0.6" class="bnp" style="animation-delay:.3s"/></svg>',

        /* 5 — Protocol hexagon */
        '<svg viewBox="0 0 200 120" fill="none"><polygon points="100,22 122,34 122,58 100,70 78,58 78,34" stroke="#55298E" stroke-width="1.4" fill="rgba(85,41,142,0.1)"/><circle cx="100" cy="46" r="6" fill="#55298E" fill-opacity="0.5" class="bnp"/><circle cx="36" cy="26" r="13" stroke="#1CA9C9" stroke-width="1.1" fill="rgba(28,169,201,0.07)"/><circle cx="164" cy="26" r="13" stroke="#1CA9C9" stroke-width="1.1" fill="rgba(28,169,201,0.07)"/><circle cx="36" cy="94" r="13" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.07)"/><circle cx="164" cy="94" r="13" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.07)"/><circle cx="36" cy="26" r="3.5" fill="#1CA9C9" opacity="0.55" class="bnp" style="animation-delay:.3s"/><circle cx="164" cy="26" r="3.5" fill="#1CA9C9" opacity="0.55" class="bnp" style="animation-delay:.7s"/><circle cx="36" cy="94" r="3.5" fill="#55298E" opacity="0.55" class="bnp" style="animation-delay:.5s"/><circle cx="164" cy="94" r="3.5" fill="#55298E" opacity="0.55" class="bnp" style="animation-delay:.9s"/><line x1="78" y1="38" x2="49" y2="30" stroke="#1CA9C9" stroke-width="0.9" opacity="0.4" class="bld"/><line x1="122" y1="38" x2="151" y2="30" stroke="#1CA9C9" stroke-width="0.9" opacity="0.4" class="bld" style="animation-delay:-.5s"/><line x1="78" y1="54" x2="49" y2="82" stroke="#55298E" stroke-width="0.9" opacity="0.4" class="bld" style="animation-delay:-1s"/><line x1="122" y1="54" x2="151" y2="82" stroke="#55298E" stroke-width="0.9" opacity="0.4" class="bld" style="animation-delay:-1.5s"/></svg>',

        /* 6 — Schema tables */
        '<svg viewBox="0 0 200 120" fill="none"><rect x="10" y="25" width="50" height="70" rx="3" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.07)"/><line x1="10" y1="38" x2="60" y2="38" stroke="#1CA9C9" stroke-width="0.8" opacity="0.5"/><line x1="10" y1="50" x2="60" y2="50" stroke="#1CA9C9" stroke-width="0.4" opacity="0.28"/><line x1="10" y1="62" x2="60" y2="62" stroke="#1CA9C9" stroke-width="0.4" opacity="0.28"/><line x1="10" y1="74" x2="60" y2="74" stroke="#1CA9C9" stroke-width="0.4" opacity="0.28"/><circle cx="24" cy="31" r="3.5" stroke="#1CA9C9" stroke-width="0.9" fill="none" opacity="0.65"/><line x1="27" y1="31" x2="36" y2="31" stroke="#1CA9C9" stroke-width="0.9" opacity="0.55"/><rect x="75" y="14" width="50" height="92" rx="3" stroke="#55298E" stroke-width="1.2" fill="rgba(85,41,142,0.08)"/><line x1="75" y1="28" x2="125" y2="28" stroke="#55298E" stroke-width="0.9" opacity="0.6"/><line x1="75" y1="42" x2="125" y2="42" stroke="#55298E" stroke-width="0.4" opacity="0.3"/><line x1="75" y1="56" x2="125" y2="56" stroke="#55298E" stroke-width="0.4" opacity="0.3"/><line x1="75" y1="70" x2="125" y2="70" stroke="#55298E" stroke-width="0.4" opacity="0.3"/><line x1="75" y1="84" x2="125" y2="84" stroke="#55298E" stroke-width="0.4" opacity="0.3"/><rect x="140" y="25" width="50" height="70" rx="3" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.07)"/><line x1="140" y1="38" x2="190" y2="38" stroke="#1CA9C9" stroke-width="0.8" opacity="0.5"/><line x1="140" y1="50" x2="190" y2="50" stroke="#1CA9C9" stroke-width="0.4" opacity="0.28"/><line x1="140" y1="62" x2="190" y2="62" stroke="#1CA9C9" stroke-width="0.4" opacity="0.28"/><path d="M60 52 Q67 52 75 46" stroke="#1CA9C9" stroke-width="0.9" fill="none" opacity="0.45" class="bld"/><path d="M125 52 Q132 52 140 46" stroke="#1CA9C9" stroke-width="0.9" fill="none" opacity="0.45" class="bld" style="animation-delay:-.7s"/><circle cx="60" cy="52" r="2.5" fill="#1CA9C9" opacity="0.55" class="bnp"/><circle cx="125" cy="52" r="2.5" fill="#55298E" opacity="0.55" class="bnp" style="animation-delay:.5s"/></svg>',

        /* 7 — Decision tree */
        '<svg viewBox="0 0 200 120" fill="none"><circle cx="100" cy="14" r="8" stroke="#55298E" stroke-width="1.4" fill="rgba(85,41,142,0.15)" class="bnp"/><circle cx="54" cy="52" r="7" stroke="#1CA9C9" stroke-width="1.2" fill="rgba(28,169,201,0.1)" class="bnp" style="animation-delay:.4s"/><circle cx="146" cy="52" r="7" stroke="#1CA9C9" stroke-width="1.2" fill="rgba(28,169,201,0.1)" class="bnp" style="animation-delay:.8s"/><circle cx="24" cy="94" r="6" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.1)" class="bnp" style="animation-delay:.2s"/><circle cx="80" cy="94" r="6" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.1)" class="bnp" style="animation-delay:.6s"/><circle cx="120" cy="94" r="6" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.1)" class="bnp" style="animation-delay:1s"/><circle cx="176" cy="94" r="6" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.1)" class="bnp" style="animation-delay:.5s"/><line x1="93" y1="20" x2="60" y2="46" stroke="#55298E" stroke-width="0.9" opacity="0.45" class="bld"/><line x1="107" y1="20" x2="140" y2="46" stroke="#55298E" stroke-width="0.9" opacity="0.45" class="bld" style="animation-delay:-.6s"/><line x1="48" y1="58" x2="28" y2="89" stroke="#1CA9C9" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-.3s"/><line x1="59" y1="58" x2="76" y2="89" stroke="#1CA9C9" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-.9s"/><line x1="139" y1="58" x2="124" y2="89" stroke="#1CA9C9" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-.5s"/><line x1="151" y1="58" x2="172" y2="89" stroke="#1CA9C9" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-1.2s"/></svg>',

        /* 8 — Knowledge spider */
        '<svg viewBox="0 0 200 120" fill="none"><circle cx="100" cy="60" r="44" stroke="#1CA9C9" stroke-width="0.5" opacity="0.14" stroke-dasharray="3 4"/><circle cx="100" cy="60" r="26" stroke="#55298E" stroke-width="0.5" opacity="0.14" stroke-dasharray="3 4"/><circle cx="100" cy="60" r="10" stroke="#1CA9C9" stroke-width="1.5" fill="rgba(28,169,201,0.16)" class="bnp"/><circle cx="100" cy="60" r="4" fill="#1CA9C9" opacity="0.65" class="bnp"/><circle cx="144" cy="60" r="7" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.1)" class="bnp" style="animation-delay:.2s"/><circle cx="122" cy="22" r="7" stroke="#1CA9C9" stroke-width="1.1" fill="rgba(28,169,201,0.1)" class="bnp" style="animation-delay:.5s"/><circle cx="78" cy="22" r="7" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.1)" class="bnp" style="animation-delay:.8s"/><circle cx="56" cy="60" r="7" stroke="#1CA9C9" stroke-width="1.1" fill="rgba(28,169,201,0.1)" class="bnp" style="animation-delay:1.1s"/><circle cx="78" cy="98" r="7" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.1)" class="bnp" style="animation-delay:.3s"/><circle cx="122" cy="98" r="7" stroke="#1CA9C9" stroke-width="1.1" fill="rgba(28,169,201,0.1)" class="bnp" style="animation-delay:.7s"/><line x1="110" y1="60" x2="137" y2="60" stroke="#1CA9C9" stroke-width="0.8" opacity="0.4" class="bld"/><line x1="107" y1="52" x2="117" y2="27" stroke="#55298E" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-.4s"/><line x1="93" y1="52" x2="83" y2="27" stroke="#1CA9C9" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-.8s"/><line x1="90" y1="60" x2="63" y2="60" stroke="#55298E" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-1.2s"/><line x1="93" y1="68" x2="83" y2="93" stroke="#1CA9C9" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-.6s"/><line x1="107" y1="68" x2="117" y2="93" stroke="#55298E" stroke-width="0.8" opacity="0.4" class="bld" style="animation-delay:-1s"/></svg>',

        /* 9 — Radar rings */
        '<svg viewBox="0 0 200 120" fill="none"><polygon points="100,10 152,40 152,80 100,110 48,80 48,40" stroke="#55298E" stroke-width="0.7" fill="none" opacity="0.22"/><polygon points="100,26 136,46 136,74 100,94 64,74 64,46" stroke="#1CA9C9" stroke-width="0.7" fill="none" opacity="0.28"/><polygon points="100,42 120,52 120,68 100,78 80,68 80,52" stroke="#55298E" stroke-width="1" fill="rgba(85,41,142,0.1)" opacity="0.5"/><line x1="100" y1="10" x2="100" y2="110" stroke="#55298E" stroke-width="0.4" opacity="0.14"/><line x1="48" y1="40" x2="152" y2="80" stroke="#55298E" stroke-width="0.4" opacity="0.14"/><line x1="152" y1="40" x2="48" y2="80" stroke="#55298E" stroke-width="0.4" opacity="0.14"/><polygon points="100,20 140,50 132,78 86,88 58,62 68,34" fill="rgba(28,169,201,0.1)" stroke="#1CA9C9" stroke-width="0.9" opacity="0.55"/><g style="transform-origin:100px 60px" class="bsw"><line x1="100" y1="60" x2="100" y2="16" stroke="#1CA9C9" stroke-width="1.2" opacity="0.5" stroke-linecap="round"/></g><circle cx="100" cy="60" r="4" fill="#55298E" opacity="0.7" class="bnp"/></svg>',

        /* 10 — RAG pipeline */
        '<svg viewBox="0 0 200 120" fill="none"><circle cx="22" cy="60" r="16" stroke="#1CA9C9" stroke-width="1.1" fill="rgba(28,169,201,0.07)"/><circle cx="74" cy="60" r="16" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.07)"/><circle cx="126" cy="60" r="16" stroke="#1CA9C9" stroke-width="1.1" fill="rgba(28,169,201,0.07)"/><circle cx="178" cy="60" r="16" stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.07)"/><line x1="38" y1="60" x2="58" y2="60" stroke="#1CA9C9" stroke-width="1.1" opacity="0.5" class="bld"/><polyline points="55,56 58,60 55,64" stroke="#1CA9C9" stroke-width="1.1" fill="none" opacity="0.6"/><line x1="90" y1="60" x2="110" y2="60" stroke="#55298E" stroke-width="1.1" opacity="0.5" class="bld" style="animation-delay:-.7s"/><polyline points="107,56 110,60 107,64" stroke="#55298E" stroke-width="1.1" fill="none" opacity="0.6"/><line x1="142" y1="60" x2="162" y2="60" stroke="#1CA9C9" stroke-width="1.1" opacity="0.5" class="bld" style="animation-delay:-1.4s"/><polyline points="159,56 162,60 159,64" stroke="#1CA9C9" stroke-width="1.1" fill="none" opacity="0.6"/><rect x="14" y="51" width="13" height="18" rx="1.5" stroke="#1CA9C9" stroke-width="1" fill="none" opacity="0.7"/><line x1="16" y1="57" x2="25" y2="57" stroke="#1CA9C9" stroke-width="0.7" opacity="0.5"/><line x1="16" y1="62" x2="25" y2="62" stroke="#1CA9C9" stroke-width="0.7" opacity="0.5"/><circle cx="69" cy="56" r="2.2" fill="#55298E" opacity="0.6" class="bnp"/><circle cx="76" cy="63" r="2.2" fill="#55298E" opacity="0.6" class="bnp" style="animation-delay:.3s"/><circle cx="81" cy="55" r="2.2" fill="#1CA9C9" opacity="0.5" class="bnp" style="animation-delay:.6s"/><circle cx="126" cy="57" r="8" stroke="#1CA9C9" stroke-width="1.1" fill="none" opacity="0.6"/><line x1="132" y1="64" x2="138" y2="70" stroke="#1CA9C9" stroke-width="1.5" opacity="0.65" stroke-linecap="round"/><line x1="178" y1="48" x2="178" y2="72" stroke="#55298E" stroke-width="1.2" opacity="0.6" class="bnp"/><line x1="166" y1="60" x2="190" y2="60" stroke="#55298E" stroke-width="1.2" opacity="0.6" class="bnp" style="animation-delay:.5s"/></svg>',

        /* 11 — Vector space */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="20" y1="100" x2="185" y2="100" stroke="#55298E" stroke-width="0.5" opacity="0.18"/><line x1="20" y1="20" x2="20" y2="100" stroke="#55298E" stroke-width="0.5" opacity="0.18"/><circle cx="46" cy="30" r="3" fill="#55298E" opacity="0.42" class="bnp" style="animation-delay:.1s"/><circle cx="82" cy="26" r="2.5" fill="#1CA9C9" opacity="0.36" class="bnp" style="animation-delay:.5s"/><circle cx="122" cy="34" r="3" fill="#55298E" opacity="0.42" class="bnp" style="animation-delay:.9s"/><circle cx="158" cy="28" r="2.5" fill="#1CA9C9" opacity="0.36" class="bnp" style="animation-delay:.3s"/><circle cx="36" cy="66" r="2.5" fill="#1CA9C9" opacity="0.36" class="bnp" style="animation-delay:.7s"/><circle cx="172" cy="72" r="3" fill="#55298E" opacity="0.42" class="bnp" style="animation-delay:.6s"/><circle cx="62" cy="88" r="2.5" fill="#1CA9C9" opacity="0.36" class="bnp" style="animation-delay:1s"/><circle cx="148" cy="82" r="3" fill="#55298E" opacity="0.42" class="bnp" style="animation-delay:.2s"/><circle cx="178" cy="52" r="2.5" fill="#1CA9C9" opacity="0.36" class="bnp" style="animation-delay:.8s"/><circle cx="100" cy="60" r="3" fill="#1CA9C9" opacity="0.5" class="bnp" style="animation-delay:.15s"/><circle cx="90" cy="72" r="3" fill="#55298E" opacity="0.5" class="bnp" style="animation-delay:.55s"/><circle cx="114" cy="68" r="2.5" fill="#1CA9C9" opacity="0.46" class="bnp" style="animation-delay:.85s"/><circle cx="95" cy="58" r="9" stroke="#55298E" stroke-width="1.2" fill="rgba(85,41,142,0.1)" class="bnp"/><circle cx="95" cy="58" r="3.5" fill="#55298E" opacity="0.8" class="bnp"/><line x1="95" y1="58" x2="100" y2="60" stroke="#55298E" stroke-width="0.8" opacity="0.42" stroke-dasharray="3 2"/><line x1="95" y1="58" x2="90" y2="72" stroke="#1CA9C9" stroke-width="0.8" opacity="0.42" stroke-dasharray="3 2"/><line x1="95" y1="58" x2="114" y2="68" stroke="#1CA9C9" stroke-width="0.8" opacity="0.42" stroke-dasharray="3 2"/></svg>',

        /* 12 — Anomaly spike */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="18" y1="100" x2="186" y2="100" stroke="#1CA9C9" stroke-width="0.5" opacity="0.2"/><line x1="18" y1="72" x2="186" y2="72" stroke="#1CA9C9" stroke-width="0.4" opacity="0.12" stroke-dasharray="3 3"/><line x1="18" y1="44" x2="186" y2="44" stroke="#1CA9C9" stroke-width="0.4" opacity="0.12" stroke-dasharray="3 3"/><path d="M18,86 C34,84 46,88 64,80 C76,74 84,80 100,76" stroke="#1CA9C9" stroke-width="1.5" fill="none" opacity="0.62" stroke-linecap="round"/><path d="M100,76 L114,18 L128,76" stroke="#1CA9C9" stroke-width="1.5" fill="none" opacity="0.78" stroke-linecap="round" stroke-linejoin="round"/><path d="M128,76 C140,78 156,74 172,80 C180,84 184,80 186,78" stroke="#1CA9C9" stroke-width="1.5" fill="none" opacity="0.62" stroke-linecap="round"/><circle cx="114" cy="18" r="11" stroke="#55298E" stroke-width="1.2" fill="none" opacity="0.65" class="bnp"/><circle cx="114" cy="18" r="17" stroke="#55298E" stroke-width="0.6" fill="none" opacity="0.28" class="bnp" style="animation-delay:.4s"/><circle cx="114" cy="18" r="3.5" fill="#1CA9C9" opacity="0.88" class="bnp" style="animation-delay:.2s"/><line x1="114" y1="32" x2="114" y2="44" stroke="#55298E" stroke-width="1" opacity="0.38"/><circle cx="114" cy="48" r="2" fill="#55298E" opacity="0.38"/></svg>',

        /* 13 — Data streams */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="14" y1="32" x2="186" y2="32" stroke="#55298E" stroke-width="0.8" opacity="0.24"/><line x1="14" y1="60" x2="186" y2="60" stroke="#1CA9C9" stroke-width="0.8" opacity="0.24"/><line x1="14" y1="88" x2="186" y2="88" stroke="#55298E" stroke-width="0.8" opacity="0.24"/><polyline points="11,29 7,32 11,35" stroke="#55298E" stroke-width="0.9" fill="none" opacity="0.4"/><polyline points="189,29 193,32 189,35" stroke="#55298E" stroke-width="0.9" fill="none" opacity="0.4"/><polyline points="11,57 7,60 11,63" stroke="#1CA9C9" stroke-width="0.9" fill="none" opacity="0.4"/><polyline points="189,57 193,60 189,63" stroke="#1CA9C9" stroke-width="0.9" fill="none" opacity="0.4"/><rect x="28" y="27" width="20" height="10" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp"/><rect x="64" y="27" width="26" height="10" rx="2" fill="#55298E" fill-opacity="0.32" class="bgp" style="animation-delay:.4s"/><rect x="110" y="27" width="16" height="10" rx="2" fill="#1CA9C9" fill-opacity="0.36" class="bgp" style="animation-delay:.8s"/><rect x="144" y="27" width="22" height="10" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp" style="animation-delay:1.2s"/><rect x="20" y="55" width="24" height="10" rx="2" fill="#1CA9C9" fill-opacity="0.36" class="bgp" style="animation-delay:.2s"/><rect x="70" y="55" width="18" height="10" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp" style="animation-delay:.6s"/><rect x="116" y="55" width="28" height="10" rx="2" fill="#1CA9C9" fill-opacity="0.36" class="bgp" style="animation-delay:1s"/><rect x="158" y="55" width="20" height="10" rx="2" fill="#55298E" fill-opacity="0.32" class="bgp" style="animation-delay:1.4s"/><rect x="38" y="83" width="18" height="10" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp" style="animation-delay:.3s"/><rect x="78" y="83" width="24" height="10" rx="2" fill="#1CA9C9" fill-opacity="0.36" class="bgp" style="animation-delay:.7s"/><rect x="126" y="83" width="20" height="10" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp" style="animation-delay:1.1s"/><rect x="160" y="83" width="16" height="10" rx="2" fill="#1CA9C9" fill-opacity="0.32" class="bgp" style="animation-delay:1.5s"/></svg>',

        /* 14 — Scatter plot */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="22" y1="18" x2="22" y2="104" stroke="#1CA9C9" stroke-width="0.5" opacity="0.2"/><line x1="22" y1="104" x2="188" y2="104" stroke="#1CA9C9" stroke-width="0.5" opacity="0.2"/><line x1="22" y1="82" x2="188" y2="82" stroke="#1CA9C9" stroke-width="0.3" opacity="0.1" stroke-dasharray="3 4"/><line x1="22" y1="60" x2="188" y2="60" stroke="#1CA9C9" stroke-width="0.3" opacity="0.1" stroke-dasharray="3 4"/><line x1="22" y1="38" x2="188" y2="38" stroke="#1CA9C9" stroke-width="0.3" opacity="0.1" stroke-dasharray="3 4"/><circle cx="42"  cy="88" r="4.5" stroke="#55298E" stroke-width="1" fill="rgba(85,41,142,0.15)" class="bnp"/><circle cx="58"  cy="76" r="3.5" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.12)" class="bnp" style="animation-delay:.25s"/><circle cx="74"  cy="82" r="5"   stroke="#55298E" stroke-width="1" fill="rgba(85,41,142,0.18)" class="bnp" style="animation-delay:.5s"/><circle cx="90"  cy="64" r="3.5" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.12)" class="bnp" style="animation-delay:.75s"/><circle cx="106" cy="56" r="6"   stroke="#55298E" stroke-width="1.1" fill="rgba(85,41,142,0.22)" class="bnp" style="animation-delay:1s"/><circle cx="118" cy="70" r="3"   stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.1)"  class="bnp" style="animation-delay:.15s"/><circle cx="130" cy="42" r="5"   stroke="#55298E" stroke-width="1" fill="rgba(85,41,142,0.18)" class="bnp" style="animation-delay:.4s"/><circle cx="144" cy="52" r="3.5" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.12)" class="bnp" style="animation-delay:.65s"/><circle cx="158" cy="34" r="4"   stroke="#55298E" stroke-width="1" fill="rgba(85,41,142,0.15)" class="bnp" style="animation-delay:.9s"/><circle cx="172" cy="28" r="5.5" stroke="#1CA9C9" stroke-width="1.1" fill="rgba(28,169,201,0.2)"  class="bnp" style="animation-delay:1.15s"/><line x1="42" y1="88" x2="172" y2="28" stroke="#1CA9C9" stroke-width="0.7" stroke-dasharray="4 3" opacity="0.28"/></svg>',

        /* 15 — Donut chart */
        '<svg viewBox="0 0 200 120" fill="none"><circle cx="78" cy="60" r="40" stroke="rgba(255,255,255,0.06)" stroke-width="16" fill="none"/><circle cx="78" cy="60" r="40" stroke="#55298E" stroke-width="16" fill="none" stroke-dasharray="88 163" stroke-dashoffset="-8" opacity="0.65" class="bnp"/><circle cx="78" cy="60" r="40" stroke="#1CA9C9" stroke-width="16" fill="none" stroke-dasharray="55 196" stroke-dashoffset="-98" opacity="0.6" class="bnp" style="animation-delay:.5s"/><circle cx="78" cy="60" r="40" stroke="rgba(85,41,142,0.35)" stroke-width="16" fill="none" stroke-dasharray="32 219" stroke-dashoffset="-155" opacity="0.5" class="bnp" style="animation-delay:1s"/><circle cx="78" cy="60" r="26" stroke="rgba(255,255,255,0.04)" stroke-width="1" fill="rgba(5,26,60,0.8)"/><circle cx="78" cy="60" r="4" fill="#1CA9C9" opacity="0.7" class="bnp"/><line x1="132" y1="28" x2="158" y2="28" stroke="#55298E" stroke-width="0.8" opacity="0.5"/><line x1="132" y1="44" x2="158" y2="44" stroke="#1CA9C9" stroke-width="0.8" opacity="0.5"/><line x1="132" y1="60" x2="158" y2="60" stroke="#55298E" stroke-width="0.8" opacity="0.35"/><circle cx="128" cy="28" r="3" fill="#55298E" opacity="0.65" class="bnp"/><circle cx="128" cy="44" r="3" fill="#1CA9C9" opacity="0.65" class="bnp" style="animation-delay:.4s"/><circle cx="128" cy="60" r="3" fill="rgba(85,41,142,0.5)" opacity="0.55" class="bnp" style="animation-delay:.8s"/><rect x="162" y="22" width="24" height="8" rx="1" fill="#55298E" fill-opacity="0.3" class="bgp"/><rect x="162" y="38" width="18" height="8" rx="1" fill="#1CA9C9" fill-opacity="0.28" class="bgp" style="animation-delay:.3s"/><rect x="162" y="54" width="20" height="8" rx="1" fill="rgba(85,41,142,0.28)" class="bgp" style="animation-delay:.6s"/></svg>',

        /* 16 — Heatmap grid */
        '<svg viewBox="0 0 200 120" fill="none"><rect x="14" y="14" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.65" class="bgp"/><rect x="40" y="14" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.22" class="bgp" style="animation-delay:.1s"/><rect x="66" y="14" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.38" class="bgp" style="animation-delay:.2s"/><rect x="92" y="14" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.55" class="bgp" style="animation-delay:.3s"/><rect x="118" y="14" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.28" class="bgp" style="animation-delay:.4s"/><rect x="144" y="14" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.42" class="bgp" style="animation-delay:.5s"/><rect x="170" y="14" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.18" class="bgp" style="animation-delay:.6s"/><rect x="14" y="36" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.28" class="bgp" style="animation-delay:.7s"/><rect x="40" y="36" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.52" class="bgp" style="animation-delay:.8s"/><rect x="66" y="36" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.72" class="bgp" style="animation-delay:.9s"/><rect x="92" y="36" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.35" class="bgp" style="animation-delay:1s"/><rect x="118" y="36" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.18" class="bgp" style="animation-delay:1.1s"/><rect x="144" y="36" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.60" class="bgp" style="animation-delay:1.2s"/><rect x="170" y="36" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.44" class="bgp" style="animation-delay:1.3s"/><rect x="14" y="58" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.20" class="bgp" style="animation-delay:.25s"/><rect x="40" y="58" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.45" class="bgp" style="animation-delay:.35s"/><rect x="66" y="58" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.32" class="bgp" style="animation-delay:.55s"/><rect x="92" y="58" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.60" class="bgp" style="animation-delay:.75s"/><rect x="118" y="58" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.48" class="bgp" style="animation-delay:.95s"/><rect x="144" y="58" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.25" class="bgp" style="animation-delay:1.15s"/><rect x="170" y="58" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.55" class="bgp" style="animation-delay:1.35s"/><rect x="14" y="80" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.38" class="bgp" style="animation-delay:.45s"/><rect x="40" y="80" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.18" class="bgp" style="animation-delay:.65s"/><rect x="66" y="80" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.62" class="bgp" style="animation-delay:.85s"/><rect x="92" y="80" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp" style="animation-delay:1.05s"/><rect x="118" y="80" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.28" class="bgp" style="animation-delay:1.25s"/><rect x="144" y="80" width="22" height="18" rx="2" fill="#55298E" fill-opacity="0.50" class="bgp" style="animation-delay:1.45s"/><rect x="170" y="80" width="22" height="18" rx="2" fill="#1CA9C9" fill-opacity="0.35" class="bgp" style="animation-delay:.15s"/></svg>',

        /* 17 — Funnel chart */
        '<svg viewBox="0 0 200 120" fill="none"><polygon points="26,14 174,14 148,40 52,40" fill="#1CA9C9" fill-opacity="0.28" stroke="#1CA9C9" stroke-width="0.9" class="bgp"/><polygon points="52,44 148,44 130,68 70,68" fill="#55298E" fill-opacity="0.30" stroke="#55298E" stroke-width="0.9" class="bgp" style="animation-delay:.4s"/><polygon points="70,72 130,72 118,94 82,94" fill="#1CA9C9" fill-opacity="0.36" stroke="#1CA9C9" stroke-width="0.9" class="bgp" style="animation-delay:.8s"/><polygon points="82,98 118,98 110,112 90,112" fill="#55298E" fill-opacity="0.44" stroke="#55298E" stroke-width="0.9" class="bgp" style="animation-delay:1.2s"/><line x1="182" y1="27" x2="194" y2="27" stroke="#1CA9C9" stroke-width="0.8" opacity="0.45"/><line x1="182" y1="56" x2="194" y2="56" stroke="#55298E" stroke-width="0.8" opacity="0.45"/><line x1="182" y1="83" x2="194" y2="83" stroke="#1CA9C9" stroke-width="0.8" opacity="0.45"/><circle cx="180" cy="27" r="2.5" fill="#1CA9C9" opacity="0.6" class="bnp"/><circle cx="180" cy="56" r="2.5" fill="#55298E" opacity="0.6" class="bnp" style="animation-delay:.35s"/><circle cx="180" cy="83" r="2.5" fill="#1CA9C9" opacity="0.5" class="bnp" style="animation-delay:.7s"/></svg>',

        /* 18 — Sankey / flow diagram */
        '<svg viewBox="0 0 200 120" fill="none"><rect x="8"  y="16" width="18" height="28" rx="2" fill="#1CA9C9" fill-opacity="0.5" class="bgp"/><rect x="8"  y="50" width="18" height="20" rx="2" fill="#55298E" fill-opacity="0.45" class="bgp" style="animation-delay:.3s"/><rect x="8"  y="76" width="18" height="28" rx="2" fill="#1CA9C9" fill-opacity="0.35" class="bgp" style="animation-delay:.6s"/><rect x="90" y="12" width="18" height="40" rx="2" fill="#55298E" fill-opacity="0.50" class="bgp" style="animation-delay:.2s"/><rect x="90" y="56" width="18" height="52" rx="2" fill="#1CA9C9" fill-opacity="0.40" class="bgp" style="animation-delay:.7s"/><rect x="172" y="20" width="18" height="32" rx="2" fill="#1CA9C9" fill-opacity="0.52" class="bgp" style="animation-delay:.4s"/><rect x="172" y="56" width="18" height="44" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp" style="animation-delay:.9s"/><path d="M26,28 C58,28 58,30 90,30" stroke="#1CA9C9" stroke-width="10" stroke-opacity="0.14" fill="none"/><path d="M26,57 C58,57 58,82 90,82" stroke="#55298E" stroke-width="8"  stroke-opacity="0.12" fill="none"/><path d="M108,28 C140,28 140,32 172,32" stroke="#55298E" stroke-width="12" stroke-opacity="0.14" fill="none"/><path d="M108,72 C140,72 140,70 172,70" stroke="#1CA9C9" stroke-width="10" stroke-opacity="0.12" fill="none"/><path d="M26,28 C58,28 58,30 90,30" stroke="#1CA9C9" stroke-width="1.2" stroke-opacity="0.45" fill="none" class="bld"/><path d="M108,28 C140,28 140,32 172,32" stroke="#55298E" stroke-width="1.2" stroke-opacity="0.45" fill="none" class="bld" style="animation-delay:-.6s"/></svg>',

        /* 19 — Treemap */
        '<svg viewBox="0 0 200 120" fill="none"><rect x="8"  y="8"  width="90" height="58" rx="3" fill="#55298E" fill-opacity="0.30" stroke="#55298E" stroke-width="0.9" class="bgp"/><rect x="102" y="8"  width="90" height="34" rx="3" fill="#1CA9C9" fill-opacity="0.28" stroke="#1CA9C9" stroke-width="0.9" class="bgp" style="animation-delay:.3s"/><rect x="102" y="46" width="52" height="20" rx="3" fill="#55298E" fill-opacity="0.22" stroke="#55298E" stroke-width="0.9" class="bgp" style="animation-delay:.6s"/><rect x="158" y="46" width="34" height="20" rx="3" fill="#1CA9C9" fill-opacity="0.32" stroke="#1CA9C9" stroke-width="0.9" class="bgp" style="animation-delay:.9s"/><rect x="8"  y="70" width="52" height="42" rx="3" fill="#1CA9C9" fill-opacity="0.26" stroke="#1CA9C9" stroke-width="0.9" class="bgp" style="animation-delay:.15s"/><rect x="64" y="70" width="34" height="42" rx="3" fill="#55298E" fill-opacity="0.34" stroke="#55298E" stroke-width="0.9" class="bgp" style="animation-delay:.45s"/><rect x="102" y="70" width="90" height="18" rx="3" fill="#1CA9C9" fill-opacity="0.20" stroke="#1CA9C9" stroke-width="0.9" class="bgp" style="animation-delay:.75s"/><rect x="102" y="92" width="44" height="20" rx="3" fill="#55298E" fill-opacity="0.38" stroke="#55298E" stroke-width="0.9" class="bgp" style="animation-delay:1.05s"/><rect x="150" y="92" width="42" height="20" rx="3" fill="#1CA9C9" fill-opacity="0.28" stroke="#1CA9C9" stroke-width="0.9" class="bgp" style="animation-delay:1.35s"/></svg>',

        /* 20 — Stacked area chart */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="18" y1="104" x2="188" y2="104" stroke="#1CA9C9" stroke-width="0.5" opacity="0.18"/><line x1="18" y1="18" x2="18" y2="104" stroke="#1CA9C9" stroke-width="0.5" opacity="0.18"/><path d="M18,96 C50,90 80,86 110,78 C140,70 162,66 188,58 L188,104 L18,104 Z" fill="#55298E" fill-opacity="0.22"/><path d="M18,96 C50,90 80,86 110,78 C140,70 162,66 188,58" stroke="#55298E" stroke-width="1.3" fill="none" opacity="0.55" stroke-linecap="round" class="bnp"/><path d="M18,78 C50,70 80,62 110,52 C140,42 162,36 188,26 L188,58 C162,66 140,70 110,78 C80,86 50,90 18,96 Z" fill="#1CA9C9" fill-opacity="0.18"/><path d="M18,78 C50,70 80,62 110,52 C140,42 162,36 188,26" stroke="#1CA9C9" stroke-width="1.3" fill="none" opacity="0.60" stroke-linecap="round" class="bnp" style="animation-delay:.4s"/><path d="M18,58 C50,50 80,44 110,34 C140,24 162,20 188,14 L188,26 C162,36 140,42 110,52 C80,62 50,70 18,78 Z" fill="#55298E" fill-opacity="0.14"/><path d="M18,58 C50,50 80,44 110,34 C140,24 162,20 188,14" stroke="#55298E" stroke-width="1.1" fill="none" opacity="0.40" stroke-linecap="round" class="bnp" style="animation-delay:.8s"/><circle cx="110" cy="52" r="3" fill="#1CA9C9" opacity="0.75" class="bnp" style="animation-delay:.2s"/><circle cx="188" cy="26" r="3" fill="#55298E" opacity="0.65" class="bnp" style="animation-delay:.6s"/></svg>',

        /* 21 — Box plot / quartile whiskers */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="36" y1="60" x2="36" y2="18" stroke="#1CA9C9" stroke-width="0.7" opacity="0.35" stroke-dasharray="3 3"/><line x1="36" y1="98" x2="36" y2="60" stroke="#1CA9C9" stroke-width="0.7" opacity="0.35" stroke-dasharray="3 3"/><line x1="26" y1="18" x2="46" y2="18" stroke="#1CA9C9" stroke-width="1.2" opacity="0.55"/><line x1="26" y1="98" x2="46" y2="98" stroke="#1CA9C9" stroke-width="1.2" opacity="0.55"/><rect x="18" y="36" width="36" height="42" rx="2" stroke="#1CA9C9" stroke-width="1.2" fill="rgba(28,169,201,0.10)"/><line x1="18" y1="56" x2="54" y2="56" stroke="#1CA9C9" stroke-width="1.6" opacity="0.75"/><line x1="100" y1="50" x2="100" y2="16" stroke="#55298E" stroke-width="0.7" opacity="0.35" stroke-dasharray="3 3"/><line x1="100" y1="100" x2="100" y2="68" stroke="#55298E" stroke-width="0.7" opacity="0.35" stroke-dasharray="3 3"/><line x1="90" y1="16" x2="110" y2="16" stroke="#55298E" stroke-width="1.2" opacity="0.55"/><line x1="90" y1="100" x2="110" y2="100" stroke="#55298E" stroke-width="1.2" opacity="0.55"/><rect x="82" y="32" width="36" height="36" rx="2" stroke="#55298E" stroke-width="1.2" fill="rgba(85,41,142,0.12)"/><line x1="82" y1="48" x2="118" y2="48" stroke="#55298E" stroke-width="1.6" opacity="0.75"/><line x1="164" y1="44" x2="164" y2="14" stroke="#1CA9C9" stroke-width="0.7" opacity="0.35" stroke-dasharray="3 3"/><line x1="164" y1="106" x2="164" y2="70" stroke="#1CA9C9" stroke-width="0.7" opacity="0.35" stroke-dasharray="3 3"/><line x1="154" y1="14" x2="174" y2="14" stroke="#1CA9C9" stroke-width="1.2" opacity="0.55"/><line x1="154" y1="106" x2="174" y2="106" stroke="#1CA9C9" stroke-width="1.2" opacity="0.55"/><rect x="146" y="28" width="36" height="42" rx="2" stroke="#1CA9C9" stroke-width="1.2" fill="rgba(28,169,201,0.09)"/><line x1="146" y1="52" x2="182" y2="52" stroke="#1CA9C9" stroke-width="1.6" opacity="0.75"/><circle cx="36" cy="56" r="2.5" fill="#1CA9C9" opacity="0.8" class="bnp"/><circle cx="100" cy="48" r="2.5" fill="#55298E" opacity="0.8" class="bnp" style="animation-delay:.4s"/><circle cx="164" cy="52" r="2.5" fill="#1CA9C9" opacity="0.8" class="bnp" style="animation-delay:.8s"/></svg>',

        /* 22 — Radial / circular network */
        '<svg viewBox="0 0 200 120" fill="none"><circle cx="100" cy="60" r="50" stroke="#55298E" stroke-width="0.5" opacity="0.12" stroke-dasharray="3 5"/><circle cx="100" cy="60" r="32" stroke="#1CA9C9" stroke-width="0.5" opacity="0.12" stroke-dasharray="3 5"/><circle cx="100" cy="60" r="12" stroke="#55298E" stroke-width="1.2" fill="rgba(85,41,142,0.14)" class="bnp"/><circle cx="100" cy="60" r="4" fill="#55298E" opacity="0.7" class="bnp"/><circle cx="150" cy="60" r="6" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.12)" class="bnp" style="animation-delay:.2s"/><circle cx="129" cy="17" r="6" stroke="#55298E" stroke-width="1" fill="rgba(85,41,142,0.12)" class="bnp" style="animation-delay:.4s"/><circle cx="71"  cy="17" r="6" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.12)" class="bnp" style="animation-delay:.6s"/><circle cx="50"  cy="60" r="6" stroke="#55298E" stroke-width="1" fill="rgba(85,41,142,0.12)" class="bnp" style="animation-delay:.8s"/><circle cx="71"  cy="103" r="6" stroke="#1CA9C9" stroke-width="1" fill="rgba(28,169,201,0.12)" class="bnp" style="animation-delay:1s"/><circle cx="129" cy="103" r="6" stroke="#55298E" stroke-width="1" fill="rgba(85,41,142,0.12)" class="bnp" style="animation-delay:1.2s"/><line x1="112" y1="60" x2="144" y2="60" stroke="#1CA9C9" stroke-width="0.8" opacity="0.38" class="bld"/><line x1="107" y1="49" x2="124" y2="22" stroke="#55298E" stroke-width="0.8" opacity="0.38" class="bld" style="animation-delay:-.3s"/><line x1="93"  y1="49" x2="76"  y2="22" stroke="#1CA9C9" stroke-width="0.8" opacity="0.38" class="bld" style="animation-delay:-.6s"/><line x1="88"  y1="60" x2="56"  y2="60" stroke="#55298E" stroke-width="0.8" opacity="0.38" class="bld" style="animation-delay:-.9s"/><line x1="93"  y1="71" x2="76"  y2="98" stroke="#1CA9C9" stroke-width="0.8" opacity="0.38" class="bld" style="animation-delay:-1.2s"/><line x1="107" y1="71" x2="124" y2="98" stroke="#55298E" stroke-width="0.8" opacity="0.38" class="bld" style="animation-delay:-1.5s"/></svg>',

        /* 23 — Gantt / timeline */
        '<svg viewBox="0 0 200 120" fill="none"><line x1="38" y1="10" x2="38" y2="112" stroke="#1CA9C9" stroke-width="0.4" opacity="0.15"/><line x1="80" y1="10" x2="80" y2="112" stroke="#1CA9C9" stroke-width="0.4" opacity="0.15"/><line x1="122" y1="10" x2="122" y2="112" stroke="#1CA9C9" stroke-width="0.4" opacity="0.15"/><line x1="164" y1="10" x2="164" y2="112" stroke="#1CA9C9" stroke-width="0.4" opacity="0.15"/><rect x="10" y="18" width="14" height="8" rx="2" fill="#1CA9C9" fill-opacity="0.35" class="bgp"/><rect x="38" y="18" width="56" height="8" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp" style="animation-delay:.1s"/><rect x="10" y="32" width="32" height="8" rx="2" fill="#55298E" fill-opacity="0.32" class="bgp" style="animation-delay:.2s"/><rect x="46" y="32" width="76" height="8" rx="2" fill="#1CA9C9" fill-opacity="0.38" class="bgp" style="animation-delay:.3s"/><rect x="136" y="32" width="36" height="8" rx="2" fill="#55298E" fill-opacity="0.28" class="bgp" style="animation-delay:.4s"/><rect x="10" y="46" width="60" height="8" rx="2" fill="#1CA9C9" fill-opacity="0.30" class="bgp" style="animation-delay:.5s"/><rect x="80" y="46" width="44" height="8" rx="2" fill="#55298E" fill-opacity="0.40" class="bgp" style="animation-delay:.6s"/><rect x="10" y="60" width="24" height="8" rx="2" fill="#55298E" fill-opacity="0.36" class="bgp" style="animation-delay:.7s"/><rect x="42" y="60" width="92" height="8" rx="2" fill="#1CA9C9" fill-opacity="0.44" class="bgp" style="animation-delay:.8s"/><rect x="144" y="60" width="28" height="8" rx="2" fill="#55298E" fill-opacity="0.26" class="bgp" style="animation-delay:.9s"/><rect x="10" y="74" width="80" height="8" rx="2" fill="#1CA9C9" fill-opacity="0.32" class="bgp" style="animation-delay:1s"/><rect x="96" y="74" width="52" height="8" rx="2" fill="#55298E" fill-opacity="0.38" class="bgp" style="animation-delay:1.1s"/><rect x="10" y="88" width="42" height="8" rx="2" fill="#55298E" fill-opacity="0.28" class="bgp" style="animation-delay:1.2s"/><rect x="60" y="88" width="68" height="8" rx="2" fill="#1CA9C9" fill-opacity="0.36" class="bgp" style="animation-delay:1.3s"/><rect x="136" y="88" width="38" height="8" rx="2" fill="#55298E" fill-opacity="0.42" class="bgp" style="animation-delay:1.4s"/><circle cx="38"  cy="22" r="2.5" fill="#1CA9C9" opacity="0.65" class="bnp"/><circle cx="94"  cy="36" r="2.5" fill="#55298E" opacity="0.65" class="bnp" style="animation-delay:.35s"/><circle cx="124" cy="50" r="2.5" fill="#1CA9C9" opacity="0.65" class="bnp" style="animation-delay:.7s"/><circle cx="134" cy="64" r="2.5" fill="#55298E" opacity="0.65" class="bnp" style="animation-delay:1.05s"/></svg>'
    ];

    /* ── DOM refs ──────────────────────────────────────────────── */
    var stage      = document.getElementById('heroStage');
    var cardsLayer = document.getElementById('bgCardsLayer');
    var canvas     = document.getElementById('bgCanvas');
    var ctx        = canvas.getContext('2d');

    /* ── Mouse state ───────────────────────────────────────────── */
    var mouse = { x: -9999, y: -9999 };
    var spotX = -9999, spotY = -9999;

    /* ── Card proximity data ───────────────────────────────────── */
    var cardEls   = [];

    var REVEAL_RADIUS = 190;
    var BASE_OPACITY  = 0.07;
    var PEAK_OPACITY  = 0.95;

    /* ── Separator beam lines ──────────────────────────────────── */
    var seams = [];   /* { isV, pos } — pixel coord of each gap centre */
    var beams = [];   /* active travelling beams */

    /* ── Build grid ────────────────────────────────────────────── */
    function buildGrid() {
        cardsLayer.innerHTML = '';
        cardEls = [];

        var W = stage.offsetWidth;
        var H = stage.offsetHeight;
        var g = GRID_GAP;

        var cardW = Math.floor((W - g * (GRID_COLS + 1)) / GRID_COLS);
        var cardH = Math.floor((H - g * (GRID_ROWS + 1)) / GRID_ROWS);

        for (var row = 0; row < GRID_ROWS; row++) {
            for (var col = 0; col < GRID_COLS; col++) {
                var idx    = row * GRID_COLS + col;
                var svgStr = SVGS[idx % SVGS.length];
                var isCyan = (idx % 2 === 0);

                var x = g + col * (cardW + g);
                var y = g + row * (cardH + g);

                var el = document.createElement('div');
                el.className = 'bg-card ' + (isCyan ? 'bc-cyan' : 'bc-violet');
                el.style.left   = x + 'px';
                el.style.top    = y + 'px';
                el.style.width  = cardW + 'px';
                el.style.height = cardH + 'px';

                el.innerHTML = '<div class="bc-svg-wrap">' + svgStr + '</div>';
                cardsLayer.appendChild(el);

                cardEls.push({
                    el:  el,
                    cx:  x + cardW * 0.5,
                    cy:  y + cardH * 0.5,
                    cur: BASE_OPACITY
                });
            }
        }

        /* Compute gap centre positions for beams */
        seams = [];
        beams = [];
        for (var sc = 1; sc < GRID_COLS; sc++) {
            seams.push({ isV: true,  pos: g + sc * (cardW + g) - g / 2 });
        }
        for (var sr = 1; sr < GRID_ROWS; sr++) {
            seams.push({ isV: false, pos: g + sr * (cardH + g) - g / 2 });
        }
    }

    /* ── Canvas resize ─────────────────────────────────────────── */
    function resizeCanvas() {
        canvas.width  = stage.offsetWidth;
        canvas.height = stage.offsetHeight;
    }

    /* ── Sequential single-beam launcher ───────────────────────── */
    var beamTurn  = 0;   /* even = vertical, odd = horizontal */
    var vSeamIdx  = 0;
    var hSeamIdx  = 0;

    function launchNextBeam() {
        if (!seams.length) { setTimeout(launchNextBeam, 500); return; }

        var isV  = (beamTurn % 2 === 0);
        beamTurn++;

        var pool = seams.filter(function (s) { return s.isV === isV; });
        if (!pool.length) { setTimeout(launchNextBeam, 500); return; }

        /* cycle through each gap in order */
        var seam = isV
            ? pool[vSeamIdx++ % pool.length]
            : pool[hSeamIdx++ % pool.length];

        var len  = isV ? (canvas.height || stage.offsetHeight)
                       : (canvas.width  || stage.offsetWidth);
        var half = len * 0.09;
        var dur  = 160 + Math.random() * 60;   /* ~2.7 – 3.7 s at 60 fps */

        beams = [{                              /* only one beam at a time */
            seam:  seam,
            p:     -half,
            speed: len / dur,
            half:  half,
            alpha: 0.85,
            rgb:   CYAN_RGB
        }];

        /* next beam = travel time + 2 s pause */
        setTimeout(launchNextBeam, (dur / 60) * 1000 + 2000);
    }

    setTimeout(launchNextBeam, 600);

    /* ── Mouse tracking ─────────────────────────────────────────── */
    stage.addEventListener('mousemove', function (e) {
        var r   = stage.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
    });
    stage.addEventListener('mouseleave', function () {
        mouse.x = -9999; mouse.y = -9999;
    });

    /* ── Lerp helper ────────────────────────────────────────────── */
    function lerp(a, b, t) { return a + (b - a) * t; }

    /* ── Main render loop ───────────────────────────────────────── */
    function draw() {
        requestAnimationFrame(draw);

        var W = canvas.width;
        var H = canvas.height;
        if (!W || !H) return;

        ctx.clearRect(0, 0, W, H);

        /* ── 1. Soft central glow ── */
        var cx = W * 0.5, cy = H * 0.5;

        var cg1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.40);
        cg1.addColorStop(0,    'rgba(' + VIOLET_RGB + ',0.055)');
        cg1.addColorStop(0.5,  'rgba(' + VIOLET_RGB + ',0.022)');
        cg1.addColorStop(1,    'rgba(' + VIOLET_RGB + ',0)');
        ctx.fillStyle = cg1;
        ctx.fillRect(0, 0, W, H);

        var cg2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.30);
        cg2.addColorStop(0,    'rgba(' + CYAN_RGB + ',0.045)');
        cg2.addColorStop(0.6,  'rgba(' + CYAN_RGB + ',0.012)');
        cg2.addColorStop(1,    'rgba(' + CYAN_RGB + ',0)');
        ctx.fillStyle = cg2;
        ctx.fillRect(0, 0, W, H);

        /* ── 2. Separator beam lines ── */
        var aliveBeams = [];
        beams.forEach(function (b) {
            b.p += b.speed;
            var len = b.seam.isV ? H : W;
            if (b.p > len + b.half) return;   /* expired */

            var p1 = b.p - b.half;
            var p2 = b.p + b.half;
            var sp = b.seam.pos;

            /* Hairline pulse — 1px crisp line with soft glow */
            if (b.seam.isV) {
                /* Soft glow (6px wide stroke) */
                var gg = ctx.createLinearGradient(0, p1, 0, p2);
                gg.addColorStop(0,   'rgba(' + b.rgb + ',0)');
                gg.addColorStop(0.4, 'rgba(' + b.rgb + ',0.07)');
                gg.addColorStop(1,   'rgba(' + b.rgb + ',0.18)');
                ctx.beginPath();
                ctx.moveTo(sp, p1); ctx.lineTo(sp, p2);
                ctx.strokeStyle = gg;
                ctx.lineWidth = 6;
                ctx.stroke();
                /* 1px crisp core */
                var gc = ctx.createLinearGradient(0, p1, 0, p2);
                gc.addColorStop(0,   'rgba(' + b.rgb + ',0)');
                gc.addColorStop(0.35,'rgba(' + b.rgb + ',0.45)');
                gc.addColorStop(1,   'rgba(' + b.rgb + ',' + b.alpha + ')');
                ctx.beginPath();
                ctx.moveTo(sp, p1); ctx.lineTo(sp, p2);
                ctx.strokeStyle = gc;
                ctx.lineWidth = 1;
                ctx.stroke();
            } else {
                /* Soft glow (6px wide stroke) */
                var gg = ctx.createLinearGradient(p1, 0, p2, 0);
                gg.addColorStop(0,   'rgba(' + b.rgb + ',0)');
                gg.addColorStop(0.4, 'rgba(' + b.rgb + ',0.07)');
                gg.addColorStop(1,   'rgba(' + b.rgb + ',0.18)');
                ctx.beginPath();
                ctx.moveTo(p1, sp); ctx.lineTo(p2, sp);
                ctx.strokeStyle = gg;
                ctx.lineWidth = 6;
                ctx.stroke();
                /* 1px crisp core */
                var gc = ctx.createLinearGradient(p1, 0, p2, 0);
                gc.addColorStop(0,   'rgba(' + b.rgb + ',0)');
                gc.addColorStop(0.35,'rgba(' + b.rgb + ',0.45)');
                gc.addColorStop(1,   'rgba(' + b.rgb + ',' + b.alpha + ')');
                ctx.beginPath();
                ctx.moveTo(p1, sp); ctx.lineTo(p2, sp);
                ctx.strokeStyle = gc;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            aliveBeams.push(b);
        });
        beams = aliveBeams;

        /* ── 2b. Intersection node dots ── */
        var vSeamList = seams.filter(function (s) { return  s.isV; });
        var hSeamList = seams.filter(function (s) { return !s.isV; });
        vSeamList.forEach(function (vs) {
            hSeamList.forEach(function (hs) {
                var nx = vs.pos, ny = hs.pos;
                /* Outer glow */
                var dr = ctx.createRadialGradient(nx, ny, 0, nx, ny, 5);
                dr.addColorStop(0,   'rgba(' + CYAN_RGB + ',0.50)');
                dr.addColorStop(0.5, 'rgba(' + CYAN_RGB + ',0.14)');
                dr.addColorStop(1,   'rgba(' + CYAN_RGB + ',0)');
                ctx.fillStyle = dr;
                ctx.fillRect(nx - 5, ny - 5, 10, 10);
                /* 1.5px solid dot */
                ctx.beginPath();
                ctx.arc(nx, ny, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + CYAN_RGB + ',0.65)';
                ctx.fill();
            });
        });

        /* ── 3. Card proximity opacity ── */
        cardEls.forEach(function (c) {
            var dx   = spotX - c.cx;
            var dy   = spotY - c.cy;
            var dist = Math.sqrt(dx * dx + dy * dy);

            /* smoothstep falloff */
            var t = Math.max(0, 1 - dist / REVEAL_RADIUS);
            t = t * t * (3 - 2 * t);

            var target = BASE_OPACITY + (PEAK_OPACITY - BASE_OPACITY) * t;

            /* lerp: slightly faster reveal than fade-out for a discovery feel */
            var lf = target > c.cur ? 0.09 : 0.055;
            c.cur  = c.cur + (target - c.cur) * lf;

            /* only write to DOM when value has changed meaningfully */
            var opStr = c.cur.toFixed(3);
            if (c.el.style.opacity !== opStr) {
                c.el.style.opacity = opStr;
            }
        });

        /* ── 5. Spotlight canvas glow ── */
        var hasPtr = mouse.x > -9000;
        if (hasPtr) {
            spotX = lerp(spotX < -9000 ? mouse.x : spotX, mouse.x, 0.10);
            spotY = lerp(spotY < -9000 ? mouse.y : spotY, mouse.y, 0.10);
        } else {
            spotX = lerp(spotX, -500, 0.05);
            spotY = lerp(spotY, -500, 0.05);
        }

        /* outer ambient */
        var sR1 = Math.max(W, H) * 0.32;
        var sg1 = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, sR1);
        sg1.addColorStop(0,    'rgba(' + CYAN_RGB + ',0.042)');
        sg1.addColorStop(0.45, 'rgba(' + CYAN_RGB + ',0.016)');
        sg1.addColorStop(1,    'rgba(' + CYAN_RGB + ',0)');
        ctx.fillStyle = sg1;
        ctx.fillRect(0, 0, W, H);

        /* tight inner */
        var sR2 = Math.min(W, H) * 0.15;
        var sg2 = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, sR2);
        sg2.addColorStop(0,   'rgba(' + CYAN_RGB + ',0.065)');
        sg2.addColorStop(0.5, 'rgba(' + CYAN_RGB + ',0.022)');
        sg2.addColorStop(1,   'rgba(' + CYAN_RGB + ',0)');
        ctx.fillStyle = sg2;
        ctx.fillRect(0, 0, W, H);
    }

    /* ── Init ───────────────────────────────────────────────────── */
    resizeCanvas();
    buildGrid();
    draw();


    window.addEventListener('resize', function () {
        resizeCanvas();
        buildGrid();
    });


})();

/* ── Core Modules — sticky list synced to scrolling preview cards ── */
    (function () {
        const items = Array.from(document.querySelectorAll('.cm-item'));
        const cards = Array.from(document.querySelectorAll('.cm-card'));
        if (!items.length || !cards.length) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const deskQuery    = window.matchMedia('(min-width: 992px)');
        let active = 'askme';

        function setActive(key) {
            if (key === active) return;
            active = key;
            items.forEach(it => {
                const on = it.dataset.product === key;
                it.classList.toggle('is-active', on);
                const btn = it.querySelector('.cm-item-btn');
                if (btn) btn.setAttribute('aria-expanded', on ? 'true' : 'false');
            });
            cards.forEach(c => c.classList.toggle('is-active', c.dataset.product === key));
        }

        /* Whichever preview card sits nearest the viewport's vertical centre wins. */
        function pickActive() {
            const mid = window.innerHeight / 2;
            let best = null, bestDist = Infinity;
            for (const c of cards) {
                const r = c.getBoundingClientRect();
                const d = Math.abs((r.top + r.height / 2) - mid);
                if (d < bestDist) { bestDist = d; best = c; }
            }
            if (best) setActive(best.dataset.product);
        }

        let ticking = false;
        function onScroll() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => { pickActive(); ticking = false; });
        }

        /* Click a list item → smooth-scroll its card to centre. */
        items.forEach(it => {
            const btn = it.querySelector('.cm-item-btn');
            if (!btn) return;
            btn.addEventListener('click', () => {
                const card = cards.find(c => c.dataset.product === it.dataset.product);
                if (!card) return;
                const r = card.getBoundingClientRect();
                const y = window.scrollY + r.top - (window.innerHeight / 2 - r.height / 2);
                window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
            });
        });

        function setupMode() {
            window.removeEventListener('scroll', onScroll);
            if (deskQuery.matches) {
                window.addEventListener('scroll', onScroll, { passive: true });
                pickActive();
            } else {
                /* Mobile: list is fully expanded via CSS; no scroll syncing. */
                setActive('askme');
            }
        }
        deskQuery.addEventListener('change', setupMode);
        window.addEventListener('resize', onScroll, { passive: true });
        setupMode();
    })();

    /* ── Trusted logos — staggered flip animation with colored logos ── */
    (function () {
        var grid = document.getElementById('logoFlipGrid');
        if (!grid) return;

        var logos = [
            { src: 'assets/images/homeV2o/Logo section/Bayer_Cross_1_.svg',                            alt: 'Bayer' },
            { src: 'assets/images/homeV2o/Logo section/logo-siriusxm-vector-logo 1.svg',                alt: 'SiriusXM' },
            { src: 'assets/images/homeV2o/Logo section/national-rural-health-mission-logo-vector 1.svg', alt: 'National Rural Health Mission' },
            { src: 'assets/images/homeV2o/Logo section/dwihn-logo 1.png',                               alt: 'DWIHN' },
            { src: 'assets/images/homeV2o/Logo section/seed-advertising [Vectorized].svg',              alt: 'SEED Advertising' },
            { src: 'assets/images/homeV2o/Logo section/L1 1.svg',                                       alt: 'Client logo' },
            { src: 'assets/images/homeV2o/Logo section/Ducont.png',                                     alt: 'Ducont' },
            { src: 'assets/images/homeV2o/Logo section/L3 1.svg',                                       alt: 'Client logo' },
            { src: 'assets/images/homeV2o/Logo section/L4 1.svg',                                       alt: 'Client logo' },
            { src: 'assets/images/homeV2o/Logo section/Group.svg',                                      alt: 'Client logo' },
            { src: 'assets/images/homeV2o/Logo section/g2317.svg',                                      alt: 'Client logo' },
            { src: 'assets/images/homeV2o/Logo section/Group 1699.svg',                                 alt: 'Client logo' },
            { src: 'assets/images/homeV2o/Logo section/Group 48098351.svg',                             alt: 'Client logo' },
            { src: 'assets/images/homeV2o/Logo section/Rectangle.svg',                                  alt: 'Client logo' },
            { src: 'assets/images/homeV2o/Logo section/trident-group-vector-logo.svg',                  alt: 'Trident Group' },
            { src: 'assets/images/homeV2o/Logo section/Vector.svg',                                     alt: 'Client logo' }
        ];

        function shuffle(arr) {
            var a = arr.slice(), i = a.length, j, t;
            while (i--) { j = Math.floor(Math.random() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
            return a;
        }

        var SLOTS   = 8;
        var FLIP_MS = 900;
        var paired  = shuffle(logos);

        function makeImg(logo) {
            var img = document.createElement('img');
            img.src = logo.src; img.alt = logo.alt; img.loading = 'lazy';
            return img;
        }

        var cards = [];

        for (var i = 0; i < SLOTS; i++) {
            var logoA = paired[i];
            var logoB = paired[i + SLOTS];

            var card  = document.createElement('div');  card.className  = 'lf-card';
            var inner = document.createElement('div');  inner.className = 'lf-inner';
            var front = document.createElement('div');  front.className = 'lf-face lf-front';
            var back  = document.createElement('div');  back.className  = 'lf-face lf-back';

            front.appendChild(makeImg(logoA));
            back.appendChild(makeImg(logoB));
            inner.appendChild(front); inner.appendChild(back);
            card.appendChild(inner);
            grid.appendChild(card);

            cards.push({ card: card, flipped: false });
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        function scheduleFlip(cardObj, delay) {
            setTimeout(function () {
                cardObj.flipped = !cardObj.flipped;
                cardObj.card.classList.toggle('is-flipped', cardObj.flipped);
                scheduleFlip(cardObj, FLIP_MS + 4000 + Math.random() * 4000);
            }, delay);
        }

        cards.forEach(function (c) {
            scheduleFlip(c, Math.random() * 6000);
        });
    })();

    /* ── Scroll-reveal observer ── */
    (function () {
        var blocks = document.querySelectorAll('.reveal-block, .reveal-left, .reveal-right');
        if (!('IntersectionObserver' in window)) {
            blocks.forEach(function (el) { el.classList.add('is-visible'); });
            return;
        }
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
        blocks.forEach(function (el) { obs.observe(el); });
    })();

    /* Hero text entrance — word-by-word stagger on h1, cascade to sub + CTA */
    (function () {
        var h1 = document.querySelector('.hero-split__text h1');
        if (h1) {
            var idx = 0;
            var parts = [];
            h1.childNodes.forEach(function (node) {
                if (node.nodeType === 3) {
                    /* plain text — split into words */
                    node.textContent.split(/(\s+)/).forEach(function (chunk) {
                        if (/\S/.test(chunk)) {
                            var delay = (idx++ * 0.08).toFixed(2);
                            parts.push('<span class="hw-outer"><span class="hw" style="animation-delay:' + delay + 's">' + chunk + '</span></span>');
                        } else if (chunk) {
                            parts.push(' ');
                        }
                    });
                } else if (node.nodeType === 1) {
                    /* element (e.g. .ai-agents-gradient span) — wrap whole element */
                    var delay = (idx++ * 0.08).toFixed(2);
                    parts.push('<span class="hw-outer"><span class="hw" style="animation-delay:' + delay + 's">' + node.outerHTML + '</span></span>');
                }
            });
            h1.innerHTML = parts.join('');
        }
        var wordCount = h1 ? idx : 6;
        var subDelay  = (wordCount * 0.08 + 0.12).toFixed(2);
        var ctaDelay  = (wordCount * 0.08 + 0.32).toFixed(2);
        var visDelay  = (wordCount * 0.08 + 0.16).toFixed(2);

        var sub = document.querySelector('.hero-split__text .hero-sub');
        var cta = document.querySelector('.hero-split__ctas');
        var vis = document.querySelector('.hero-split__visual');
        if (sub) sub.style.animationDelay = subDelay + 's';
        if (cta) cta.style.animationDelay = ctaDelay + 's';
        if (vis) vis.style.animationDelay = visDelay + 's';
    })();


(function () {
    var slides   = document.querySelectorAll('.fc-slide');
    var prevBtn  = document.getElementById('fcPrev');
    var nextBtn  = document.getElementById('fcNext');
    var counter  = document.getElementById('fcCurrentSlide');
    var total    = slides.length;
    var current  = 0;

    function setActiveCol(slide, colIdx) {
        var cols = slide.querySelectorAll('.fc-col');
        cols.forEach(function (c) { c.classList.remove('is-active'); });
        if (cols[colIdx]) cols[colIdx].classList.add('is-active');
    }

    function updateNav() {
        counter.textContent = current + 1;
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === total - 1;
    }

    function goTo(idx) {
        slides[current].classList.remove('is-active');
        slides[current].setAttribute('aria-hidden', 'true');
        current = idx;
        slides[current].classList.add('is-active');
        slides[current].setAttribute('aria-hidden', 'false');
        setActiveCol(slides[current], 0);
        updateNav();
    }

    prevBtn.addEventListener('click', function () { if (current > 0) goTo(current - 1); });
    nextBtn.addEventListener('click', function () { if (current < total - 1) goTo(current + 1); });

    document.querySelectorAll('.fc-col').forEach(function (col) {
        col.addEventListener('mouseenter', function () {
            var grid = this.closest('.fc-grid');
            grid.querySelectorAll('.fc-col').forEach(function (c) { c.classList.remove('is-active'); });
            this.classList.add('is-active');
        });
    });

    document.querySelectorAll('.fc-grid').forEach(function (grid) {
        grid.addEventListener('mouseleave', function () {
            var cols = this.querySelectorAll('.fc-col');
            cols.forEach(function (c) { c.classList.remove('is-active'); });
            if (cols[0]) cols[0].classList.add('is-active');
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' && current < total - 1) goTo(current + 1);
        if (e.key === 'ArrowLeft'  && current > 0)         goTo(current - 1);
    });

    updateNav();
}());

const personaData = {
        analyst: {
            pill: "Analyst",
            heading: "Ask & Investigate",
            desc: "<strong class=\"desc-lead\">The business always needs answers fast. And the time you should be spending finding them is going into building, formatting, and explaining.</strong> Lumenore clears the path. Describe what you need and your dashboard builds itself — narrative included. Drag, drop, and your chart is boardroom-ready in minutes. When something shifts in the data, you know before anyone has to ask.",
            chips: ["Prompt-based dashboard creation — describe what you need, Lumenore builds it", "Drag-and-drop custom charts — boardroom-ready visuals without the manual effort", "AI narrative insights — the story behind the numbers, already written"],
            accent: "#0e48a5", accentSecondary: "#7747b6",
            glowA: "rgba(40, 99, 195, .55)", glowB: "rgba(119, 71, 182, .40)", glowC: "rgba(28, 169, 201, .25)",
            soft: "rgba(40, 99, 195, .08)", border: "rgba(40, 99, 195, .22)"
        },
        business: {
            pill: "Business Leaders",
            heading: "Monitor & Decide",
            desc: "<strong class=\"desc-lead\">You’re not short on data. You’re short on answers that arrive before the damage does.</strong> Lumenore watches your business around the clock — the moment a KPI shifts, you get the reason, not just the alert. Ask anything in plain English and get a trusted answer in seconds. Stay ahead, not just informed.",
            chips: ["From anomaly to root cause to your preferred communication channel — before your next meeting", "One question in plain English. Answers across sales, finance, and operations instantly."],
            accent: "#7747b6", accentSecondary: "#0e48a5",
            glowA: "rgba(119, 71, 182, .55)", glowB: "rgba(40, 99, 195, .40)", glowC: "rgba(18, 182, 248, .25)",
            soft: "rgba(119, 71, 182, .09)", border: "rgba(119, 71, 182, .25)"
        },
        scientist: {
            pill: "Data Scientist",
            heading: "Build & Innovate",
            desc: "<strong class=\"desc-lead\">You’re not short on skills. You’re short on time that isn’t already swallowed by requests that should never have reached you.</strong> Lumenore puts your expertise where it belongs — run forecasting, predictive models, and anomaly detection connected directly to live business decisions. Your models don’t sit in isolation. They drive actions the moment something changes.",
            chips: ["Built-in predictive analytics and forecasting — advanced models without switching platforms", "Anomaly detection and segmentation that feed directly into live business workflows", "From model output to business decision — no handoff, no translation, no delay"],
            accent: "#1ca9c9", accentSecondary: "#0e48a5",
            glowA: "rgba(28, 169, 201, .55)", glowB: "rgba(40, 99, 195, .40)", glowC: "rgba(119, 71, 182, .25)",
            soft: "rgba(28, 169, 201, .09)", border: "rgba(28, 169, 201, .28)"
        },
        engineer: {
            pill: "Data Engineer",
            heading: "Connect & Orchestrate",
            desc: "<strong class=\"desc-lead\">You build the foundation everything else runs on. The problem is, nobody notices until something breaks.</strong> Lumenore changes that. A visual drag-and-drop pipeline builder replaces scripts, manual wiring, and 2am alerts — so you spend less time fixing things and more time building infrastructure that powers AI agents, predictive models, and business decisions across the entire organisation.",
            chips: ["Visual drag-and-drop pipeline builder — connect, transform, and automate without scripts", "50+ pre-built enterprise connectors — new sources in minutes, not weeks", "Automated data quality and validation — clean, governed data the whole organisation can trust"],
            accent: "#12b6f8", accentSecondary: "#1ca9c9",
            glowA: "rgba(18, 182, 248, .55)", glowB: "rgba(28, 169, 201, .40)", glowC: "rgba(40, 99, 195, .25)",
            soft: "rgba(18, 182, 248, .09)", border: "rgba(18, 182, 248, .28)"
        }
    };

    const personaSection   = document.getElementById('personaSection');
    const personaTabs      = document.querySelectorAll('.px-tab');
    const personaScenes    = document.querySelectorAll('.persona-scene');
    const personaRoleLabel = document.getElementById('personaRoleLabel');
    const personaHeading   = document.getElementById('personaHeadingText');
    const personaDesc      = document.getElementById('personaDesc');
    const personaChips     = document.getElementById('personaChips');

    function activatePersona(key) {
        const d = personaData[key];
        if (!d) return;
        if (personaSection) {
            personaSection.setAttribute('data-active-persona', key);
            personaSection.style.setProperty('--pa-accent', d.accent);
            personaSection.style.setProperty('--pa-accent-secondary', d.accentSecondary);
            personaSection.style.setProperty('--pa-accent-glow-a', d.glowA);
            personaSection.style.setProperty('--pa-accent-glow-b', d.glowB);
            personaSection.style.setProperty('--pa-accent-glow-c', d.glowC);
            personaSection.style.setProperty('--pa-accent-soft', d.soft);
            personaSection.style.setProperty('--pa-accent-border', d.border);
        }
        personaTabs.forEach(t => {
            const on = t.dataset.persona === key;
            t.classList.toggle('is-active', on);
            t.setAttribute('aria-selected', on ? 'true' : 'false');
            t.setAttribute('tabindex', on ? '0' : '-1');
        });
        personaScenes.forEach(s => {
            const on = s.dataset.scene === key;
            s.classList.toggle('is-on', on);
            s.setAttribute('aria-hidden', on ? 'false' : 'true');
        });
        if (personaRoleLabel) personaRoleLabel.textContent = d.pill;
        if (personaHeading)   personaHeading.textContent   = d.heading;
        if (personaDesc)      personaDesc.innerHTML        = d.desc;
        if (personaChips)     personaChips.innerHTML = d.chips.map(c => `
            <div class="chip">
                <span class="chip-icon" aria-hidden="true">
                    <img src="assets/images/personas/bullet-check-icon.svg" width="12" height="12" alt="">
                </span>
                <span class="chip-text">${c}</span>
            </div>
        `).join('');
    }

    personaTabs.forEach(tab => {
        tab.addEventListener('click', () => activatePersona(tab.dataset.persona));
        tab.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activatePersona(tab.dataset.persona); }
        });
    });

    activatePersona('business');

    (function setupPersonaParallax(){
        const section = document.getElementById('personaSection');
        if (!section) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const glows = section.querySelectorAll('.scene-glow[data-parallax]');
        const stage = section.querySelector('.pex-stage');
        let pTicking = false;
        function update() {
            const rect = section.getBoundingClientRect();
            const wh   = window.innerHeight;
            const denom = (wh / 2) + (rect.height / 2);
            if (denom <= 0) return;
            let progress = ((rect.top + rect.height / 2) - (wh / 2)) / denom;
            if (progress > 1.3 || progress < -1.3) return;
            glows.forEach(el => {
                const amp = parseFloat(el.dataset.parallax || 0);
                el.style.transform = `translate3d(0, ${(progress * 140 * amp).toFixed(2)}px, 0)`;
            });
        }
        if (stage) {
            let stageRect = null, mTicking = false, pendingX = 0, pendingY = 0;
            const apply = () => { stage.style.setProperty('--mx', pendingX.toFixed(3)); stage.style.setProperty('--my', pendingY.toFixed(3)); mTicking = false; };
            stage.addEventListener('mouseenter', () => { stageRect = stage.getBoundingClientRect(); });
            stage.addEventListener('mousemove', (e) => {
                if (!stageRect) stageRect = stage.getBoundingClientRect();
                pendingX = (e.clientX - stageRect.left) / stageRect.width  - 0.5;
                pendingY = (e.clientY - stageRect.top)  / stageRect.height - 0.5;
                if (!mTicking) { mTicking = true; requestAnimationFrame(apply); }
            });
            stage.addEventListener('mouseleave', () => { pendingX = 0; pendingY = 0; if (!mTicking) { mTicking = true; requestAnimationFrame(apply); } stageRect = null; });
        }
        function onScroll() { if (pTicking) return; pTicking = true; requestAnimationFrame(() => { update(); pTicking = false; }); }
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        update();
    })();

/* Pricing comparison — Freemium ↔ Enterprise plan switch + bullet-driven
       right-card swap. Content + media URLs pulled verbatim from Figma frame
       401:16953 (5 Freemium variants + 7 Enterprise variants).
         · Plan-pill click swaps the plan, renders that plan's bullets in the
           left card and variant[activeBullet] in the right card
         · Bullet click swaps the right card to that bullet's variant
         · Active bullet is remembered per-plan
       Media URLs are short-lived Figma asset URLs (~7d TTL) — replace with
       locally-hosted images later if needed. */
    (function () {
        const pricingData = {
            freemium: {
                title: 'Start answering your data questions independently.',
                note:  'No Credit Card, No Setup.',
                bullets: [
                    'Connect necessary data sources with simple daily refresh',
                    'Analyze important, operational datasets',
                    'Build basic dashboards quickly',
                    'Use conversational analytics for light, ad-hoc querying',
                    'Designed for individual, self-service analytics'
                ],
                variants: [
                    { title: 'Bring your data in. Keep it up to date', subs: ['Connect files and databases without complex setup.', 'Refresh data automatically on a daily schedule.', 'Work with up-to-date numbers without manual effort.'], statNum: '60', statSuffix: '%', statCap: 'Less time spent managing data updates.', media: 'assets/images/homeV2o/pricing/Free1.gif' },
                    { title: 'Turn small datasets into clear insights', subs: ['Analyze limited data volumes without performance overhead.', 'Explore trends and patterns quickly.', 'Focus on understanding the data, not managing scale.'], statNum: '65', statSuffix: '%', statCap: 'Faster insight generation from small datasets.', media: 'assets/images/homeV2o/pricing/Free-2.gif' },
                    { title: 'Create dashboards without slowing down', subs: ['Build simple dashboards in minutes.', 'Track key metrics and performance at a glance.', 'Adjust visuals easily as your needs evolve.'], statNum: '70', statSuffix: '%', statCap: 'Reduce time spent building dashboards.', media: 'assets/images/homeV2o/Dashboard (1).gif' },
                    { title: 'Ask questions. Get answers instantly', subs: ['Use natural language to query your data.', 'Get instant visual responses without writing queries.', 'Ideal for quick checks and exploratory questions.'], statNum: '75', statSuffix: '%', statCap: 'Faster answers to everyday data questions.', media: 'assets/images/homeV2o/pricing/Free-4.gif' },
                    { title: 'Built for solo analysis and personal use', subs: ['Single-user analytics focused on personal workflows.', 'Full control to explore and analyze data independently.', 'Move from question to insight at your own pace.'], statNum: '70', statSuffix: '%', statCap: 'Reduce analysis turnaround time.', media: 'assets/images/homeV2o/pricing/Free-5.gif' }
                ]
            },
            enterprise: {
                title: 'Scale analytics across your entire organization.',
                note:  '',
                bullets: [
                    'Handle very large datasets at scale',
                    'Enable multi-user and team collaboration',
                    'Ensure enterprise-grade security and governance',
                    'Analyze data in near real time',
                    'Integrate across enterprise systems and data sources',
                    'Use governed conversational analytics across teams',
                    'Apply advanced and custom AI models'
                ],
                variants: [
                    { title: 'Built to perform at enterprise data volumes', subs: ['Analyze millions to billions of rows without performance drops.', 'Maintain fast query response even under heavy workloads.', 'Scale analytics as data grows across teams and systems.'], statNum: '80', statSuffix: '%', statCap: 'Faster insights from large datasets.', media: 'assets/images/homeV2o/pricing/enterprise-1.gif' },
                    { title: 'Designed for teams and organizations', subs: ['Multiple users can explore, analyze, and collaborate simultaneously.', 'Share dashboards, insights, and reports across departments.', 'Support organization-wide analytics adoption.'], statNum: '65', statSuffix: '%', statCap: 'Improvement in cross-team analytics alignment.', media: 'assets/images/homeV2o/pricing/enterprise-2.gif' },
                    { title: 'Protect data with built-in governance controls', subs: ['Role-based access and fine-grained data permissions.', 'Enforce security policies across users and teams.', 'Support compliance and audit requirements.'], statNum: '75', statSuffix: '%', statCap: 'Reduction in data access and compliance risks.', media: 'assets/images/homeV2o/pricing/enterprise-1.gif' },
                    { title: 'Make decisions while data is still relevant', subs: ['Ingest and analyze data with high-frequency updates.', 'Monitor operational metrics as they change.', 'Respond quickly to emerging trends and issues.'], statNum: '60', statSuffix: '%', statCap: 'Faster operational decision-making.', media: 'assets/images/homeV2o/pricing/enterprise-2.gif' },
                    { title: 'Unify data from across the enterprise', subs: ['Connect to SaaS platforms, APIs, databases, and custom systems.', 'Blend data across multiple sources seamlessly.', 'Reduce silos between operational and analytical data.'], statNum: '70', statSuffix: '%', statCap: 'Less time spent managing data integration.', media: 'assets/images/homeV2o/pricing/enterprise-1.gif' },
                    { title: 'Enable conversational analytics with control', subs: ['Allow teams to ask questions using natural language.', 'Ensure answers respect roles, permissions, and governance rules.', 'Maintain consistency and trust in AI-generated insights.'], statNum: '65', statSuffix: '%', statCap: 'Faster answers without compromising governance.', media: 'assets/images/homeV2o/pricing/enterprise-2.gif' },
                    { title: 'Tailor AI to enterprise-specific needs', subs: ['Use advanced analytics and custom AI models.', 'Apply domain-specific logic and business rules.', 'Support complex analytical and predictive use cases.'], statNum: '75', statSuffix: '%', statCap: 'Higher impact from AI-driven analytics.', media: 'assets/images/homeV2o/pricing/enterprise-1.gif' }
                ]
            }
        };

        const tabs         = document.querySelectorAll('#pricingTabs .pm-plan');
        const pmTitle      = document.getElementById('pmTitle');
        const pmSub        = document.getElementById('pmSub');
        const pmCards      = document.getElementById('pmCards');
        const paValueTitle = document.getElementById('paValueTitle');
        const paChecklist  = document.getElementById('paChecklist');
        const paMediaImg   = document.getElementById('paMediaImg');
        const paKpiNum     = document.getElementById('paKpiNum');
        const paKpiSfx     = document.getElementById('paKpiSfx');
        const paKpiCap     = document.getElementById('paKpiCap');
        const pricingMain  = document.querySelector('.pricing-main');
        const pricingAside = document.querySelector('.pricing-aside');
        const pricingSection = document.getElementById('pricingSection');
        if (!tabs.length || !pmCards) return;

        let currentPlan = 'freemium';
        const activeCapByPlan = { freemium: 0, enterprise: 0 };

        function renderCards(plan) {
            const d = pricingData[plan];
            const active = activeCapByPlan[plan];
            pmCards.innerHTML = d.bullets.map((b, i) => {
                const on = i === active;
                return '<button type="button" class="pm-card' + (on ? ' is-active' : '') + '"'
                    + ' data-cap="' + i + '" role="tab"'
                    + ' aria-selected="' + on + '" tabindex="' + (on ? '0' : '-1') + '">'
                    + '<span class="pm-card-title">' + b + '</span>'
                    + '<svg class="pm-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>'
                    + '<span class="pm-card-progress" aria-hidden="true"></span>'
                    + '</button>';
            }).join('');
            pmCards.querySelectorAll('.pm-card').forEach(card => {
                card.addEventListener('click', () => setCapability(parseInt(card.dataset.cap, 10)));
                card.addEventListener('keydown', e => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCapability(parseInt(card.dataset.cap, 10)); }
                });
            });
        }

        let kpiRaf = null;
        function countUp(el, from, to, duration) {
            if (kpiRaf) cancelAnimationFrame(kpiRaf);
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = to; return; }
            const start = performance.now();
            const range = to - from;
            function step(now) {
                const t = Math.min((now - start) / duration, 1);
                const ease = 1 - Math.pow(1 - t, 3);
                el.textContent = Math.round(from + range * ease);
                if (t < 1) kpiRaf = requestAnimationFrame(step);
            }
            kpiRaf = requestAnimationFrame(step);
        }

        function renderInsights(plan, idx) {
            const v = pricingData[plan].variants[idx];
            if (!v) return;
            paValueTitle.textContent = v.title;
            paChecklist.innerHTML = v.subs.map(s => (
                '<li><svg class="pa-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' + s + '</li>'
            )).join('');
            countUp(paKpiNum, 10, parseInt(v.statNum, 10), 700);
            paKpiSfx.textContent = v.statSuffix;
            paKpiCap.textContent = v.statCap;
            if (paMediaImg && v.media) { paMediaImg.src = v.media; paMediaImg.alt = v.title + ' preview'; }
        }

        function setCapability(idx) {
            activeCapByPlan[currentPlan] = idx;
            pmCards.querySelectorAll('.pm-card').forEach((c, i) => {
                const on = i === idx;
                c.classList.toggle('is-active', on);
                c.setAttribute('aria-selected', on);
                c.setAttribute('tabindex', on ? '0' : '-1');
                if (on) { const bar = c.querySelector('.pm-card-progress'); if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; } }
            });
            if (pricingAside) {
                pricingAside.classList.add('is-swapping');
                setTimeout(() => { renderInsights(currentPlan, idx); pricingAside.classList.remove('is-swapping'); }, 200);
            } else { renderInsights(currentPlan, idx); }
        }

        function setPlan(plan) {
            currentPlan = plan;
            const d = pricingData[plan];
            if (pricingSection) pricingSection.setAttribute('data-active-plan', plan);
            tabs.forEach(t => { const on = t.dataset.plan === plan; t.classList.toggle('is-active', on); t.setAttribute('aria-selected', on); t.setAttribute('tabindex', on ? '0' : '-1'); });
            if (pricingMain && pricingAside) {
                pricingMain.classList.add('is-swapping');
                pricingAside.classList.add('is-swapping');
                setTimeout(() => {
                    pmTitle.textContent = d.title;
                    if (d.note && d.note.trim()) { pmSub.textContent = d.note; pmSub.style.display = ''; } else { pmSub.style.display = 'none'; }
                    renderCards(plan);
                    renderInsights(plan, activeCapByPlan[plan]);
                    pricingMain.classList.remove('is-swapping');
                    pricingAside.classList.remove('is-swapping');
                    startAuto();
                }, 200);
            } else { pmTitle.textContent = d.title; pmSub.textContent = d.note; renderCards(plan); renderInsights(plan, activeCapByPlan[plan]); }
        }

        tabs.forEach(t => {
            t.addEventListener('click', () => setPlan(t.dataset.plan));
            t.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPlan(t.dataset.plan); } });
        });

        const AUTO_MS = 4000;
        let autoTimer = null, autoPaused = false;
        function startAuto() { stopAuto(); if (autoPaused) return; autoTimer = setTimeout(function () { const bullets = pricingData[currentPlan].bullets; const next = (activeCapByPlan[currentPlan] + 1) % bullets.length; setCapability(next); startAuto(); }, AUTO_MS); }
        function stopAuto()  { if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; } }

        if (pmCards) {
            pmCards.addEventListener('mouseenter', function () { autoPaused = true;  stopAuto(); });
            pmCards.addEventListener('mouseleave', function () { autoPaused = false; startAuto(); });
        }
        if ('IntersectionObserver' in window && pricingSection) {
            new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) { startAuto(); } else { stopAuto(); }
            }, { threshold: 0.25 }).observe(pricingSection);
        }
        pmCards && pmCards.addEventListener('click', function () { autoPaused = false; startAuto(); });

        renderCards('freemium');
        renderInsights('freemium', 0);
        startAuto();
    })();

    /* Mouse-parallax on pricing aside card */
    (function wireParallax(){
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        function attach(el) {
            if (!el) return;
            let mx = 0, my = 0, pending = false;
            const apply = () => { pending = false; el.style.setProperty('--mx', mx.toFixed(3)); el.style.setProperty('--my', my.toFixed(3)); };
            el.addEventListener('mousemove', (e) => { const r = el.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - 0.5; my = (e.clientY - r.top) / r.height - 0.5; if (!pending) { pending = true; requestAnimationFrame(apply); } });
            el.addEventListener('mouseleave', () => { mx = 0; my = 0; if (!pending) { pending = true; requestAnimationFrame(apply); } });
        }
        attach(document.getElementById('paValueCard'));
    })();

/* Stories carousel — prev/next arrow navigation */
    (function () {
        const track = document.getElementById('storiesTrack');
        const prev  = document.getElementById('storiesPrev');
        const next  = document.getElementById('storiesNext');
        if (!track || !prev || !next) return;
        const cardWidth = 368 + 20;
        let offset = 0;

        function maxOffset() {
            const viewportWidth = track.parentElement.clientWidth;
            const trackWidth = track.scrollWidth;
            return Math.max(0, trackWidth - viewportWidth);
        }
        function update() {
            track.style.transform = `translateX(${-offset}px)`;
        }
        prev.addEventListener('click', () => {
            offset = Math.max(0, offset - cardWidth);
            update();
        });
        next.addEventListener('click', () => {
            offset = Math.min(maxOffset(), offset + cardWidth);
            update();
        });
        window.addEventListener('resize', () => {
            offset = Math.min(offset, maxOffset());
            update();
        });
    })();

    /* Stagger reveal for success-stories carousel */
    (function wireStoriesReveal(){
        const carousel = document.getElementById('storiesCarousel');
        if (!carousel) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
            carousel.classList.add('is-revealed');
            return;
        }
        if (!('IntersectionObserver' in window)){
            carousel.classList.add('is-revealed');
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting){
                    carousel.classList.add('is-revealed');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.18 });
        io.observe(carousel);
    })();

/* Testimonial: Figma two-column card layout */
(function () {
    var testimonials = [
        {
            text: 'Their innovative data analytics and business intelligence solutions have become integral to our operational efficiency and decision-making process. With Lumenore’s customized dashboards and predictive insights, we’ve gained a competitive edge, allowing us to make informed decisions faster and more accurately.\n\nThis partnership has enhanced our ability to serve our clients effectively. We look forward to continued success together and highly recommend Lumenore for any organization seeking a reliable partner in business intelligence and digital transformation.'
        },
        {
            text: 'Lumenore’s unified analytics platform replaced our manual reporting and helped us cut reporting cycles by 30%, with real-time data integration our business users actually trust.\n\nFeatures like customizable interactive reports and real-time data integration proved especially valuable, enabling us to reduce the time spent on reporting and empower business users to make informed decisions without technical bottlenecks.'
        },
        {
            text: 'Lumenore surpassed our expectations with its intuitive, no-code platform, democratizing data access across the organization. Our clients can now create interactive dashboards, explore real-time data, and uncover hidden trends more easily and without relying on IT.\n\nLumenore\'s commitment to customer success and exceptional support have been invaluable. Being part of the Lumenore partner ecosystem will provide Xonit Soluciones Tecnológicas with valuable collaboration and resources.'
        }
    ];

    var cards  = document.querySelectorAll('.ts-pcard');
    var qText  = document.getElementById('tsQuoteText');
    var tsIndex = 1;

    function showTs(i) {
        tsIndex = ((i % 3) + 3) % 3;
        cards.forEach(function(c, ci) { c.classList.toggle('is-active', ci === tsIndex); });
        if (qText) {
            qText.classList.add('is-swapping');
            setTimeout(function() {
                qText.textContent = testimonials[tsIndex].text;
                qText.classList.remove('is-swapping');
            }, 220);
        }
    }

    cards.forEach(function(card, ci) {
        card.addEventListener('click', function() { showTs(ci); });
    });
    var btnPrev = document.getElementById('tsPrev');
    var btnNext = document.getElementById('tsNext');
    if (btnPrev) btnPrev.addEventListener('click', function() { clearInterval(tsAuto); showTs(tsIndex - 1); startAuto(); });
    if (btnNext) btnNext.addEventListener('click', function() { clearInterval(tsAuto); showTs(tsIndex + 1); startAuto(); });

    var tsAuto;
    function startAuto() {
        tsAuto = setInterval(function() { showTs(tsIndex + 1); }, 5000);
    }
    startAuto();

    var tsWrap = document.querySelector('.ts-wrap');
    if (tsWrap) {
        tsWrap.addEventListener('mouseenter', function() { clearInterval(tsAuto); });
        tsWrap.addEventListener('mouseleave', function() { startAuto(); });
    }
})();

/* Before-you-decide FAQ accordion */
    (function () {
        const faq = document.getElementById('bdFaq');
        if (!faq) return;
        faq.querySelectorAll('.faq-q').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.closest('.faq-item');
                const isOpen = item.classList.contains('is-open');
                faq.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
                if (!isOpen) item.classList.add('is-open');
            });
        });
    })();

/* ── Full-page section beam lines ── */
(function initPageBeams() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var VIOLET = '119,71,182';
    var CYAN   = '28,169,201';
    var BLUE   = '40,99,195';
    var PALETTE = [VIOLET, CYAN, BLUE];

    function setup(canvas) {
        var section = canvas.parentElement;
        var isDark  = canvas.dataset.dark === '1' ||
                      section.classList.contains('section-products') ||
                      !!section.closest('.page-finale');

        /* Alpha values: dark sections get hero-like intensity, light ones stay subtle */
        var coreAlpha = isDark ? 0.70 : 0.14;
        var glowAlpha = isDark ? 0.20 : 0.04;
        var dotAlpha  = isDark ? 0.55 : 0.18;

        var seams = [], beams = [];
        var turn = 0, vIdx = 0, hIdx = 0;
        var rafId = null, timer = null;

        function resize() {
            canvas.width  = section.offsetWidth;
            canvas.height = section.offsetHeight;
            buildSeams();
        }

        function buildSeams() {
            var W = canvas.width, H = canvas.height;
            seams = [];
            /* 2 vertical seams at 1/3 and 2/3 width */
            seams.push({ isV: true,  pos: W * 0.333 });
            seams.push({ isV: true,  pos: W * 0.667 });
            /* horizontal seams: 1 for medium sections, 2 for tall */
            if (H > 400)  seams.push({ isV: false, pos: H * 0.50 });
            if (H > 900)  seams.push({ isV: false, pos: H * 0.33 });
            if (H > 900)  seams.push({ isV: false, pos: H * 0.67 });
        }

        function launchBeam() {
            if (!seams.length) { timer = setTimeout(launchBeam, 500); return; }
            var isV  = (turn % 2 === 0);
            turn++;
            var pool = seams.filter(function (s) { return s.isV === isV; });
            if (!pool.length) { timer = setTimeout(launchBeam, 500); return; }
            var seam = isV ? pool[vIdx++ % pool.length] : pool[hIdx++ % pool.length];
            var W = canvas.width, H = canvas.height;
            var len  = isV ? H : W;
            var half = len * 0.09;
            var dur  = 180 + Math.random() * 80;   /* frames at 60fps ≈ 3–4.3s */
            var rgb  = PALETTE[turn % PALETTE.length];
            beams = [{ seam: seam, p: -half, speed: len / dur, half: half, rgb: rgb }];
            timer = setTimeout(launchBeam, (dur / 60) * 1000 + 2200);
        }

        function draw() {
            rafId = requestAnimationFrame(draw);
            var W = canvas.width, H = canvas.height;
            if (!W || !H) return;
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, W, H);

            /* Travelling beam */
            var alive = [];
            beams.forEach(function (b) {
                b.p += b.speed;
                var len = b.seam.isV ? H : W;
                if (b.p > len + b.half) return;
                var p1 = b.p - b.half, p2 = b.p + b.half, sp = b.seam.pos;

                if (b.seam.isV) {
                    /* Soft glow layer */
                    var gg = ctx.createLinearGradient(0, p1, 0, p2);
                    gg.addColorStop(0,   'rgba(' + b.rgb + ',0)');
                    gg.addColorStop(0.4, 'rgba(' + b.rgb + ',' + glowAlpha + ')');
                    gg.addColorStop(1,   'rgba(' + b.rgb + ',' + (glowAlpha * 3.5) + ')');
                    ctx.beginPath(); ctx.moveTo(sp, p1); ctx.lineTo(sp, p2);
                    ctx.strokeStyle = gg; ctx.lineWidth = 6; ctx.stroke();
                    /* 1px crisp core */
                    var gc = ctx.createLinearGradient(0, p1, 0, p2);
                    gc.addColorStop(0,    'rgba(' + b.rgb + ',0)');
                    gc.addColorStop(0.35, 'rgba(' + b.rgb + ',' + (coreAlpha * 0.5) + ')');
                    gc.addColorStop(1,    'rgba(' + b.rgb + ',' + coreAlpha + ')');
                    ctx.beginPath(); ctx.moveTo(sp, p1); ctx.lineTo(sp, p2);
                    ctx.strokeStyle = gc; ctx.lineWidth = 1; ctx.stroke();
                } else {
                    var gg = ctx.createLinearGradient(p1, 0, p2, 0);
                    gg.addColorStop(0,   'rgba(' + b.rgb + ',0)');
                    gg.addColorStop(0.4, 'rgba(' + b.rgb + ',' + glowAlpha + ')');
                    gg.addColorStop(1,   'rgba(' + b.rgb + ',' + (glowAlpha * 3.5) + ')');
                    ctx.beginPath(); ctx.moveTo(p1, sp); ctx.lineTo(p2, sp);
                    ctx.strokeStyle = gg; ctx.lineWidth = 6; ctx.stroke();
                    var gc = ctx.createLinearGradient(p1, 0, p2, 0);
                    gc.addColorStop(0,    'rgba(' + b.rgb + ',0)');
                    gc.addColorStop(0.35, 'rgba(' + b.rgb + ',' + (coreAlpha * 0.5) + ')');
                    gc.addColorStop(1,    'rgba(' + b.rgb + ',' + coreAlpha + ')');
                    ctx.beginPath(); ctx.moveTo(p1, sp); ctx.lineTo(p2, sp);
                    ctx.strokeStyle = gc; ctx.lineWidth = 1; ctx.stroke();
                }
                alive.push(b);
            });
            beams = alive;

            /* Intersection node dots */
            var vS = seams.filter(function (s) { return  s.isV; });
            var hS = seams.filter(function (s) { return !s.isV; });
            vS.forEach(function (vs) {
                hS.forEach(function (hs) {
                    var nx = vs.pos, ny = hs.pos;
                    var ctx2 = canvas.getContext('2d');
                    var dr = ctx2.createRadialGradient(nx, ny, 0, nx, ny, 5);
                    dr.addColorStop(0,   'rgba(' + CYAN + ',' + dotAlpha + ')');
                    dr.addColorStop(0.5, 'rgba(' + CYAN + ',' + (dotAlpha * 0.3) + ')');
                    dr.addColorStop(1,   'rgba(' + CYAN + ',0)');
                    ctx2.fillStyle = dr;
                    ctx2.fillRect(nx - 5, ny - 5, 10, 10);
                    ctx2.beginPath();
                    ctx2.arc(nx, ny, 1.5, 0, Math.PI * 2);
                    ctx2.fillStyle = 'rgba(' + CYAN + ',' + (dotAlpha * 0.85) + ')';
                    ctx2.fill();
                });
            });
        }

        resize();
        window.addEventListener('resize', resize);
        /* Stagger start so all sections don't fire at exactly the same time */
        var delay = 400 + Math.random() * 1200;
        setTimeout(function () { launchBeam(); draw(); }, delay);
    }

    document.querySelectorAll('.page-beam-canvas').forEach(setup);
})();

/* ── Leader fg — internal content scroll ── */
(function fgInternalScroll() {
    'use strict';
    const section = document.getElementById('personaSection');
    const list    = document.getElementById('fgScrollList');
    if (!section || !list) return;

    let scrollY = 0, scrollYV = 0, lastTs = 0, rafId = null;

    function spr(p, v, t, k, d, dt) {
        const v2 = v + ((t - p) * k - v * d) * dt;
        return [p + v2 * dt, v2];
    }
    function getProgress() {
        const r  = section.getBoundingClientRect();
        const vh = window.innerHeight;
        return Math.max(0, Math.min(1, (vh - r.top) / (section.offsetHeight + vh)));
    }
    function tick(ts) {
        const dt  = Math.min((ts - lastTs) / 1000, 0.05);
        lastTs = ts;

        const p        = getProgress();
        const t        = Math.max(0, Math.min(1, (p - 0.08) / 0.72));
        const viewport = list.parentElement;
        const maxScroll = Math.max(0, list.scrollHeight - viewport.clientHeight);
        const tY       = -(t * maxScroll);

        [scrollY, scrollYV] = spr(scrollY, scrollYV, tY, 9, 4.5, dt);
        list.style.transform = `translateY(${scrollY.toFixed(2)}px)`;

        rafId = requestAnimationFrame(tick);
    }

    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            if (!rafId) { lastTs = performance.now(); rafId = requestAnimationFrame(tick); }
        } else {
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        }
    }, { rootMargin: '200px' }).observe(section);
})();

/* Orb scene — morphing 3D sphere cycles Ask → Analyze → Detect → Act */
(function () {
    var QUERY    = 'Why did revenue drop in Q3?';
    var CHAR_MS  = 50;
    var HOLD_MS  = 3600;
    var TRAVEL_MS= 500;

    var scene    = document.getElementById('orbScene');
    var ctxEls   = ['octxAsk','octxAnalyze','octxDetect','octxAct'].map(function(id){ return document.getElementById(id); });
    var steps    = Array.from(document.querySelectorAll('.orb-step'));
    var segs     = Array.from(document.querySelectorAll('.orb-tseg'));
    var pulses   = ['otsPul0','otsPul1','otsPul2'].map(function(id){ return document.getElementById(id); });

    if (!scene) return;

    var wait = function(ms){ return new Promise(function(r){ setTimeout(r, ms); }); };
    var STATES = ['ask','analyze','detect','act'];

    function setActive(idx) {
        scene.dataset.state = STATES[idx];
        ctxEls.forEach(function(el, i){ el && el.classList.toggle('is-active', i === idx); });
        steps.forEach(function(s, i){ s.classList.toggle('is-active', i === idx); });
    }

    function resetSegs() { segs.forEach(function(s){ s.classList.remove('is-done'); }); }

    async function travelPulse(idx) {
        var p = pulses[idx];
        if (!p) return;
        p.style.animation = 'none';
        p.style.opacity = '0';
        void p.offsetWidth;
        p.style.opacity = '1';
        p.style.animation = 'orb-travel ' + TRAVEL_MS + 'ms ease-in forwards';
        await wait(TRAVEL_MS);
        segs[idx] && segs[idx].classList.add('is-done');
    }

    async function animAsk() {
        var el = document.getElementById('orbTyped');
        if (!el) return;
        el.textContent = '';
        for (var i = 0; i < QUERY.length; i++) {
            el.textContent = QUERY.slice(0, i + 1);
            await wait(CHAR_MS);
        }
    }

    async function animAnalyze() {
        var rows = ['oac0','oac1','oac2'].map(function(id){ return document.getElementById(id); });
        var ics  = ['oacI0','oacI1','oacI2'].map(function(id){ return document.getElementById(id); });
        rows.forEach(function(r){ r && r.classList.remove('is-visible','is-done'); });
        ics.forEach(function(ic){ if(ic){ ic.className='orb-ac-ic'; ic.textContent=''; } });
        for (var i = 0; i < rows.length; i++) {
            rows[i] && rows[i].classList.add('is-visible');
            await wait(520);
            rows[i] && rows[i].classList.add('is-done');
            if (ics[i]){ ics[i].className='orb-ac-ic done'; ics[i].textContent='✓'; }
            await wait(200);
        }
    }

    async function animAct() {
        var fill = document.getElementById('orbCFill');
        fill && fill.classList.remove('is-active');
        await wait(280);
        fill && fill.classList.add('is-active');
    }

    var ANIMS2 = [animAsk, animAnalyze, function(){}, animAct];

    async function loop() {
        while (true) {
            resetSegs();
            for (var i = 0; i < 4; i++) {
                setActive(i);
                ANIMS2[i]();
                await wait(HOLD_MS);
                if (i < 3) await travelPulse(i);
            }
        }
    }

    setActive(0);
    setTimeout(loop, 600);
})();

/* ── Insights product card — Lottie animation ── */
    (function () {
        var el = document.getElementById('insightsLottie');
        if (!el || typeof lottie === 'undefined' || typeof insightsLottieData === 'undefined') return;
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: !reduce,
            animationData: insightsLottieData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid meet', progressiveLoad: true }
        });
    })();

/* ── Data Magnet product card — Lottie animation ── */
    (function () {
        var el = document.getElementById('dataMagnetLottie');
        if (!el || typeof lottie === 'undefined' || typeof dataMagnetLottieData === 'undefined') return;
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: !reduce,
            animationData: dataMagnetLottieData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid meet', progressiveLoad: true }
        });
    })();

/* ── Ask Me product card — Lottie animation ── */
    (function () {
        var el = document.getElementById('askMeLottie');
        if (!el || typeof lottie === 'undefined' || typeof askMeLottieData === 'undefined') return;
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: !reduce,
            animationData: askMeLottieData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid meet', progressiveLoad: true }
        });
    })();

/* ── Hero banner — Lottie animation ── */
    (function () {
        var el = document.getElementById('heroBannerLottie');
        if (!el || typeof lottie === 'undefined') return;
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: !reduce,
            animationData: landingPageLottieData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid meet', progressiveLoad: true }
        });
    })();

/* Platform mega-menu — Col 1 hover swaps Col 2 between product detail and capability grid */
(function () {
    var mega         = document.getElementById('platformMega');
    var detail       = document.getElementById('platformDetail');
    var productPane  = document.getElementById('platformProductPane');
    var productTitle = document.getElementById('npProductTitle');
    var productTag   = document.getElementById('npProductTagline');
    var productDesc  = document.getElementById('npProductDesc');
    var ctaStart     = document.getElementById('npProductStart');
    var ctaLearn     = document.getElementById('npProductLearn');
    var ctaPricing   = document.getElementById('npProductPricing');
    var gridTitle    = document.getElementById('platformGridTitle');
    var grid         = document.getElementById('platformGrid');
    var navList      = document.querySelectorAll('#platformMega [data-platform-item]');
    var cards        = document.querySelectorAll('#platformMega [data-platform-card]');
    if (!mega || !detail) return;

    var products = {
        insights: {
            tagline: 'Self-Service Analytics',
            title:   'Lumenore Insights',
            desc:    'Democratize data with self-service, AI-powered dashboards that empower every employee to make data-driven decisions and maximize ROI instantly.',
            start: '#', learn: '#', pricing: '#'
        },
        askme: {
            tagline: 'Conversational Analytics',
            title:   'Lumenore Ask Me',
            desc:    'Query enterprise data and documents in natural language. Get instant, governed insights enhanced by Agentic RAG and seamless MCP integrations.',
            start: 'lumenore-ask-me.html', learn: 'lumenore-ask-me.html', pricing: '#'
        },
        datamagnet: {
            tagline: 'Enterprise ETL',
            title:   'Lumenore Data Magnet',
            desc:    'Connect 50+ enterprise sources with low-code ETL. Accelerate high-volume transfers to your Lakehouse with secure, cost-effective automation.',
            start: '#', learn: '#', pricing: '#'
        }
    };

    function hideAll() {
        productPane.hidden = true;
        if (gridTitle) gridTitle.hidden = true;
        if (grid)      grid.hidden      = true;
    }
    function showProduct(key) {
        var d = products[key];
        if (!d) return;
        productTag.textContent   = d.tagline;
        productTitle.textContent = d.title;
        productDesc.textContent  = d.desc;
        ctaStart.setAttribute('href',   d.start);
        ctaLearn.setAttribute('href',   d.learn);
        ctaPricing.setAttribute('href', d.pricing);
        productPane.hidden = false;
        if (gridTitle) gridTitle.hidden = true;
        if (grid)      grid.hidden      = true;
    }
    function showGrid() {
        productPane.hidden = true;
        if (gridTitle) gridTitle.hidden = false;
        if (grid)      grid.hidden      = false;
    }
    function highlight(key) {
        navList.forEach(function(n) { n.classList.toggle('is-active', n.dataset.platformItem === key); });
        cards.forEach(function(c)   { c.classList.toggle('is-active', c.dataset.platformCard === key); });
    }
    function clearHighlight() {
        navList.forEach(function(n) { n.classList.remove('is-active'); });
        cards.forEach(function(c)   { c.classList.remove('is-active'); });
    }

    navList.forEach(function(n) {
        var trigger = function() {
            var key  = n.dataset.platformItem;
            var type = n.dataset.platformType;
            highlight(key);
            if (type === 'product') showProduct(key);
            else                    showGrid();
        };
        n.addEventListener('mouseenter', trigger);
        n.addEventListener('focus',      trigger);
    });
    cards.forEach(function(c) {
        var trigger = function() { showGrid(); highlight(c.dataset.platformCard); };
        c.addEventListener('mouseenter', trigger);
        c.addEventListener('focus',      trigger);
    });

    var navItem = mega.closest('.nav-item');
    function openDefault() {
        highlight('insights');
        showProduct('insights');
    }
    if (navItem) {
        navItem.addEventListener('mouseenter', openDefault);
        navItem.addEventListener('focusin',    openDefault);
        navItem.addEventListener('mouseleave', function() { clearHighlight(); hideAll(); });
    }
})();

/* Solutions mega-menu — Col 1 hover swaps Col 2 between industry and department grids */
(function () {
    var mega         = document.getElementById('solutionMega');
    if (!mega) return;
    var navList      = mega.querySelectorAll('[data-solution-item]');
    var industryTtl  = document.getElementById('solIndustryTitle');
    var industryGrid = document.getElementById('solIndustryGrid');
    var deptTtl      = document.getElementById('solDepartmentTitle');
    var deptGrid     = document.getElementById('solDepartmentGrid');

    function hideAll() {
        industryTtl.hidden  = true;
        industryGrid.hidden = true;
        deptTtl.hidden      = true;
        deptGrid.hidden     = true;
    }
    function showIndustry() {
        industryTtl.hidden  = false;
        industryGrid.hidden = false;
        deptTtl.hidden      = true;
        deptGrid.hidden     = true;
    }
    function showDepartment() {
        industryTtl.hidden  = true;
        industryGrid.hidden = true;
        deptTtl.hidden      = false;
        deptGrid.hidden     = false;
    }
    function highlight(key) {
        navList.forEach(function(n) { n.classList.toggle('is-active', n.dataset.solutionItem === key); });
    }
    function clearHighlight() {
        navList.forEach(function(n) { n.classList.remove('is-active'); });
    }
    navList.forEach(function(n) {
        var trigger = function() {
            var key = n.dataset.solutionItem;
            highlight(key);
            if (key === 'department') showDepartment();
            else                      showIndustry();
        };
        n.addEventListener('mouseenter', trigger);
        n.addEventListener('focus',      trigger);
    });
    var navItem = mega.closest('.nav-item');
    function openDefault() { highlight('industry'); showIndustry(); }
    if (navItem) {
        navItem.addEventListener('mouseenter', openDefault);
        navItem.addEventListener('focusin',    openDefault);
        navItem.addEventListener('mouseleave', function() { clearHighlight(); hideAll(); });
    }
})();

/* Company mega-menu — shows the full grid on nav item enter */
(function () {
    var mega    = document.getElementById('companyMega');
    if (!mega) return;
    var navList = mega.querySelectorAll('[data-company-item]');
    var allTtl  = document.getElementById('coAllTitle');
    var allGrid = document.getElementById('coAllGrid');

    function hideAll() {
        if (allTtl)  allTtl.hidden  = true;
        if (allGrid) allGrid.hidden = true;
    }
    function showAll() {
        if (allTtl)  allTtl.hidden  = false;
        if (allGrid) allGrid.hidden = false;
    }
    function highlight() {
        navList.forEach(function(n) { n.classList.add('is-active'); });
    }
    function clearHighlight() {
        navList.forEach(function(n) { n.classList.remove('is-active'); });
    }
    navList.forEach(function(n) {
        n.addEventListener('mouseenter', function() { highlight(); showAll(); });
        n.addEventListener('focus',      function() { highlight(); showAll(); });
    });
    var navItem = mega.closest('.nav-item');
    if (navItem) {
        navItem.addEventListener('mouseenter', function() { highlight(); showAll(); });
        navItem.addEventListener('focusin',    function() { highlight(); showAll(); });
        navItem.addEventListener('mouseleave', function() { clearHighlight(); hideAll(); });
    }
})();

/* Hover-gap bridge — keeps mega menu open while cursor crosses the gap */
(function () {
    document.querySelectorAll('.nav-item.has-dropdown').forEach(function (item) {
        var mega = item.querySelector('.nav-mega');
        if (!mega) return;
        var closeTimer = null;
        function open() { clearTimeout(closeTimer); item.classList.add('is-open'); }
        function scheduleClose() { closeTimer = setTimeout(function () { item.classList.remove('is-open'); }, 200); }
        item.addEventListener('mouseenter', open);
        item.addEventListener('mouseleave', scheduleClose);
        mega.addEventListener('mouseenter', open);
        mega.addEventListener('mouseleave', scheduleClose);
    });
})();