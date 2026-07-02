// ─── LANGUAGE / i18n ────────────────────────────────────────────────────────
const TRANSLATIONS = {
    en: {
        nav_home: 'Home', nav_about: 'About', nav_search: 'Search Blood',
        nav_dashboard: 'Dashboard', nav_bloodbank: 'Blood Bank',
        nav_hospital: 'Hospital', nav_admin: 'Admin',
        nav_signin: 'Sign In', nav_signup: 'Sign Up', nav_logout: 'Logout',
        hero_badge: 'Critical Resource Network',
        hero_title1: 'Life', hero_title2: 'Artery',
        hero_sub: 'Connecting blood banks and hospitals across Egypt to eliminate delays and save lives — instantly.',
        hero_btn_search: 'Search Blood Now', hero_btn_learn: 'Learn More',
        hero_stat1: 'Units Managed', hero_stat2: 'Hospitals',
        hero_stat3: 'Blood Banks', hero_stat4: 'Lives Saved',
        stat_uptime: 'System Uptime', stat_response: 'Search Response',
        stat_types: 'Blood Types Tracked', stat_access: 'Free Public Access',
        feat_tag: 'Core Features', feat_title: 'Everything You Need to Save a Life',
        feat_sub: 'From instant blood search to full inventory management — Life Artery covers every critical touchpoint.',
        feat1_title: 'Instant Blood Search', feat1_desc: 'Find available blood types across all connected banks in real-time. No login required for public users in emergencies.',
        feat2_title: 'Live Inventory Tracking', feat2_desc: 'Blood banks update stock in real-time. Units, expiry dates, and availability status are always current and accurate.',
        feat3_title: 'Digital Request System', feat3_desc: 'Hospitals send blood requests digitally. Banks approve, reject, or fulfill — with full status tracking throughout.',
        feat4_title: 'Low Stock Alerts', feat4_desc: 'Automatic warnings when a blood type drops below threshold — prompting banks to prepare donation campaigns early.',
        feat5_title: 'Role-Based Access', feat5_desc: 'Dedicated dashboards for Admins, Blood Banks, and Hospitals. Each role sees exactly what they need, nothing more.',
        feat6_title: 'Analytics & Reports', feat6_desc: 'System-wide statistics and reporting tools help administrators monitor health, spot trends, and act proactively.',
        bt_tag: 'Live Inventory', bt_title: 'Current Blood Availability',
        bt_sub: 'Updated in real-time from all connected blood banks.',
        bt_search_btn: 'Search Availability →',
        how_tag: 'How It Works', how_title: 'Simple. Fast. Life-Saving.',
        step1_title: 'Search by Blood Type', step1_desc: 'Anyone can search for a blood type without needing to create an account.',
        step2_title: 'View Bank Locations', step2_desc: 'See which banks have your type, their location, and contact information instantly.',
        step3_title: 'Hospital Sends Request', step3_desc: 'Registered hospitals can send digital requests for specific types and quantities.',
        step4_title: 'Blood Bank Responds', step4_desc: 'Banks approve or fulfill requests, automatically updating their live inventory.',
        test_tag: 'Testimonials', test_title: 'What People Say',
        test1: 'Life Artery cut our blood sourcing time from hours to minutes. In critical situations, that time difference is everything.',
        test1_name: 'Dr. Ahmed Kamel', test1_role: 'Head of Emergency, Cairo Medical Center',
        test2: 'Managing our inventory used to take two people full-time. Now one person handles it in under an hour daily. Remarkable system.',
        test2_name: 'Sara El-Masry', test2_role: 'Director, Central Blood Bank',
        test3: 'My mother needed a rare blood type in the middle of the night. I found it in 3 minutes using the public search. This system saves lives.',
        test3_name: 'Mohamed Tarek', test3_role: 'Family Member — Cairo',
        cta_title: 'Every Second Counts.', cta_sub: "Don't let blood shortages cost lives. Use Life Artery to find the blood you need — right now.",
        cta_btn1: 'Search Blood Now', cta_btn2: 'Learn About the System',
        footer_desc: 'A centralized network connecting hospitals and blood banks across Egypt to eliminate delays and save lives in critical moments.',
        footer_nav: 'Navigate', footer_dashboards: 'Dashboards',
        footer_emergency: 'Emergency Contacts', footer_copy: '© 2026 Life Artery. All Rights Reserved.',
        footer_made: 'Designed with ❤️ to save lives.',
        about_tag: 'Our Story', about_hero_title: 'About Life Artery',
        about_hero_sub: 'We strive to end blood shortages and ensure it\'s available safely and efficiently, giving every patient a chance to heal and a life full of hope.',
        mission_tag: 'Our Mission', mission_title: 'Why Life Artery Exists',
        mission_p1: 'Every year, thousands of patients in Egypt lose precious time — and sometimes their lives — simply because a hospital couldn\'t find the right blood type quickly enough. Calls were made, people drove across cities, paperwork delayed urgent transfers.',
        mission_p2: 'Life Artery was created to end that. By digitizing the entire blood sourcing process, we enable instant search, digital requests, and real-time inventory management — accessible to anyone, anywhere, at any time.',
        founded_label: 'Founded', partners_label: 'Partner Hospitals', impact_label: 'Lives Impacted',
        mission_img_title: 'Every Drop Counts', mission_img_sub: 'Real-time tracking. Real impact.',
        values_tag: 'Our Values', values_title: 'What Drives Us',
        val1_title: 'Speed', val1_desc: 'In emergencies, seconds matter. We\'ve engineered every part of the system to minimize friction and maximize speed.',
        val2_title: 'Transparency', val2_desc: 'Real-time data. No guesswork. Every unit, every bank, every request — fully visible to the people who need to act.',
        val3_title: 'Accessibility', val3_desc: 'Anyone in a crisis should be able to find blood without barriers. Public search requires no account, no login.',
        roles_tag: 'Who Uses Life Artery', roles_title: 'Built for Everyone in the Chain',
        role1_title: 'Public Users', role1_desc: 'Search for blood types freely. No account needed. Find the nearest available source in an emergency instantly.',
        role1_btn: 'Search Now',
        role2_title: 'Hospitals', role2_desc: 'Check availability before requesting. Send digital orders. Track approval status in real-time.',
        role2_btn: 'Hospital Portal',
        role3_title: 'Blood Banks', role3_desc: 'Manage inventory, respond to hospital requests, receive low-stock alerts, and keep data accurate.',
        role3_btn: 'Bank Portal',
        role4_title: 'Administrators', role4_desc: 'Manage users, monitor all inventory and requests system-wide, view statistics and ensure quality.',
        role4_btn: 'Admin Panel',
        about_cta_title: 'Ready to make a difference?',
        about_cta_sub: 'Join Life Artery and become part of the network saving lives across Egypt.',
        about_cta_btn: 'Search Blood Now →',
        search_badge: '🔍 No login required',
        search_title: 'Find Blood — Right Now',
        search_sub: 'Select a blood type to see all available sources near you.',
        search_label: 'Blood Type', search_btn: 'Search Now',
        search_quick: 'Quick select:',
        search_default_title: 'Search for a Blood Type',
        search_default_sub: 'Select a blood type above to find all available sources.',
        search_no_result: 'No results for',
        search_no_sub: 'Try checking back later or contact nearby banks directly.',
        search_units: 'units',
        emergency_title: '🚨 In a Life-Threatening Emergency?',
        emergency_sub: "Call Egypt's National Blood Hotline or Emergency Services immediately.",
        emergency_btn1: 'Call 123 — Ambulance',
        emergency_btn2: '0111-647-4444 Blood Hotline',
        bb_dash_title: 'Blood Bank Dashboard',
        bb_dash_sub: 'Manage your inventory, respond to requests, and monitor stock levels.',
        bb_total: 'Total Units', bb_low: 'Low Stock Types',
        bb_pending: 'Pending Requests', bb_completed: 'Completed',
        bb_alerts_title: '⚠️ Stock Alerts',
        bb_inv_title: 'Blood Inventory', bb_add_unit: '+ Add Unit',
        bb_col_type: 'Blood Type', bb_col_qty: 'Quantity',
        bb_col_expiry: 'Expiry Date', bb_col_status: 'Status', bb_col_actions: 'Actions',
        bb_type_label: 'Blood Type', bb_qty_label: 'Quantity (units)',
        bb_expiry_label: 'Expiry Date', bb_add_btn: 'Add Unit', bb_cancel: 'Cancel',
        bb_req_title: 'Hospital Requests',
        bb_req_sub: 'Manage incoming blood requests from hospitals',
        bb_col_hosp: 'Hospital', bb_col_date: 'Date', bb_col_action: 'Action',
        approve_btn: 'Approve', reject_btn: 'Reject', delete_btn: 'Delete',
        edit_btn: 'Edit', remove_btn: 'Remove',
        h_dash_title: 'Hospital Dashboard',
        h_dash_sub: 'Check blood availability, send requests, and track your orders.',
        h_avail: 'Available Types', h_pending: 'Pending Requests',
        h_approved: 'Approved', h_total: 'Total Requests',
        h_avail_title: 'Blood Availability Search',
        h_req_form_title: 'Send Blood Request',
        h_type_label: 'Blood Type Needed', h_qty_label: 'Number of Units',
        h_send_btn: '✈ Send Request',
        h_history_title: 'My Request History',
        h_col_type: 'Blood Type', h_col_qty: 'Quantity',
        h_col_date: 'Date Sent', h_col_status: 'Status',
        h_col_bank: 'Blood Bank Name',
        adm_title: 'Admin Control Panel',
        adm_sub: 'System-wide overview — manage users, monitor requests, and track inventory.',
        adm_total_units: 'Total Blood Units', adm_total_reqs: 'Total Requests',
        adm_users: 'Registered Users', adm_pending: 'Pending Requests',
        adm_status_title: 'System Status', adm_status_val: '🟢 Operational',
        adm_status_sub: 'All systems normal', adm_updated: 'Last Updated', adm_sync: 'Real-time sync',
        adm_users_title: 'User Management', adm_add_user: '+ Add User',
        adm_col_name: 'Name', adm_col_email: 'Email', adm_col_role: 'Role', adm_col_actions: 'Actions',
        adm_name_lbl: 'Full Name', adm_email_lbl: 'Email Address', adm_role_lbl: 'Role',
        adm_role_ph: 'Select Role', adm_add_btn: 'Add User',
        adm_all_req_title: 'All System Requests',
        status_good: 'Good', status_low: 'Low', status_critical: 'Critical',
        status_pending: 'Pending', status_approved: 'Approved',
        status_rejected: 'Rejected', status_completed: 'Completed',
        status_available: 'Available', status_low_stock: 'Low Stock', status_unavailable: 'Unavailable',
        sb_overview: 'Overview', sb_stats: 'Statistics', sb_management: 'Management',
        sb_users: 'User Management', sb_all_req: 'All Requests',
        sb_system: 'System', sb_public_search: 'Public Search', sb_admin_panel: 'Admin Panel', sb_contact_msgs: 'Contact Messages',
        sb_hospitals: 'Hospitals', sb_blood_banks: 'Blood Banks',
        sb_notifications: 'Notifications', sb_notif_msg: 'Message',
        sb_inventory: 'Inventory', sb_blood_units: 'Blood Units',
        sb_low_alerts: 'Low Stock Alerts', sb_requests: 'Requests',
        sb_incoming: 'Incoming Requests', sb_quick_links: 'Quick Links',
        sb_search_req: 'Search & Request', sb_availability: 'Blood Availability',
        sb_new_req: 'New Request', sb_my_req: 'My Requests', sb_history: 'Request History',
        sb_settings: 'Settings', sb_hospital_info: 'Hospital Info', sb_bb_info: 'Blood Bank Info',
        sb_back: 'Back to Dashboard',
        toast_req_sent: 'Request sent successfully!',
        toast_fill: 'Please fill all fields.',
        toast_user_added: 'User added successfully!',
        toast_user_removed: 'User removed.',
        toast_unit_added: 'Blood unit added!',
        toast_unit_deleted: 'Unit removed.',
        toast_request_approved: 'Request approved!',
        toast_request_rejected: 'Request rejected.',
        loading_inv: 'Loading inventory...', loading_req: 'Loading requests...',
        loading_users: 'Loading users...', no_requests: 'No requests yet.',
        central_bank: 'Central Blood Bank', cairo_nasr: 'Cairo - Nasr City',
        cairo_hosp: 'Cairo Medical Center', cairo_helio: 'Cairo - Heliopolis',
        nav_contact: 'Contact',
        nav_admins: 'Admins',
        contact_tag: 'Get In Touch',
        contact_hero_title: 'Contact Life Artery Support',
        contact_hero_sub: "We're here to help hospitals and blood banks across Egypt.",
        contact_form_title: 'Send Us a Message',
        contact_name_label: 'Full Name',
        contact_email_label: 'Email Address',
        contact_subject_label: 'Subject',
        contact_message_label: 'Message',
        contact_send_btn: 'Send Message',
        contact_success: 'Your message has been received successfully. We will resolve your issue as soon as possible.',
        contact_info_title: 'Contact Information',
        contact_email_title: 'Email Support',
        contact_emergency_title: 'Emergency Hotline',
        contact_hours_title: 'Service Hours',
        contact_hours_value: '24/7 Support for hospitals and blood banks.',
        h_select_type: 'Select a blood type to see available sources.',
        h_bank_label: 'Select Blood Bank',
        bb_edit_title: 'Edit Inventory',
        bb_save: 'Save Changes',
        adm_col_details: 'Details',
        footer_social_msg: 'Official Life Artery channels coming soon.',
        confirm_delete: 'Are you sure?',
        yes: 'Yes', no: 'No',
        h_info_sub: 'View and edit hospital profile information.',
        bb_info_sub: 'View and edit blood bank profile information.',
        h_info_editable: 'Editable Information',
        bb_info_editable: 'Editable Information',
        h_info_readonly: 'Read-Only Information',
        bb_info_readonly: 'Read-Only Information',
        hosp_name: 'Hospital Name',
        h_phone_label: 'Official Phone',
        h_email_label: 'Official Email',
        h_governorate: 'Governorate',
        h_city: 'City',
        h_address: 'Street Address',
        h_med_director: 'Medical Director Name',
        h_acct_owner: 'Account Owner Name',
        h_new_pass: 'Password',
        h_pass_leave: '(leave blank to keep current)',
        h_license: 'License Number',
        h_issuer: 'Issuing Authority',
        h_role: 'Role',
        h_approved: 'IsApproved',
        h_reg_date: 'Registration Date',
        h_lic_doc: 'License Document',
        h_view_doc: 'View Document',
        bb_name: 'Blood Bank Name',
        bb_phone_label: 'Official Phone',
        bb_email_label: 'Official Email',
        bb_governorate: 'Governorate',
        bb_city: 'City',
        bb_address: 'Street Address',
        bb_working_hours: 'Working Hours',
        bb_manager: 'Manager Name',
        bb_acct_owner: 'Account Owner Name',
        bb_new_pass: 'Password',
        bb_license: 'License Number',
        bb_issuer: 'Issuing Authority',
        bb_role: 'Role',
        bb_approved: 'IsApproved',
        bb_reg_date: 'Registration Date',
        bb_lic_doc: 'License Document',
        bb_view_doc: 'View Document',
        save_btn: 'Save Changes',
        nav_notifications: 'Notifications',
        adm_view_details: 'View Details',
        login_password_label: 'Password',
        last_updated_none: 'No recent activity',
        rtl_brand_order: 'normal',
        auth_back_home: 'Back to Home',
        lang_switch: 'العربية',
        welcome_back: 'Welcome Back',
        welcome_back_sub: 'Sign in to access your dashboard',
        signin_btn: 'Sign In →',
        no_account: "Don't have an account?",
        create_account: 'Create Account',
        create_account_sub: 'Who are you registering as?',
        role_hospital_desc: 'Medical facility',
        role_bank_desc: 'Blood storage center',
        next_btn: 'Next →',
        has_account: 'Already have an account?',
        reg_hosp_title: 'Hospital Registration',
        reg_bb_title: 'Blood Bank Registration',
        reg_facility_sub: 'Official facility information',
        reg_created_redirect: 'Account created! Redirecting…',
        sec_facility_info: 'Facility Information',
        reg_lic_doc_label: 'License Document (PDF / Image)',
        reg_city_district: 'City / District',
        reg_gps_label: 'GPS / Google Maps Link',
        confirm_password: 'Confirm Password',
        reg_hosp_btn: 'Register Hospital →',
        reg_bb_btn: 'Register Blood Bank →',
        change_role_btn: '← Change Role',
        work_hours_from: 'Working Hours — From',
        work_hours_to: 'To',
        acct_info_section: 'Account Information',
        acct_security_section: 'Account Security',
        loc_contact_section: 'Location & Contact',
        operations_section: 'Operations',
        facility_details_section: 'Facility Details',
        select_placeholder: 'Select…',
        moh_option: 'Ministry of Health',
        hio_option: 'Health Insurance Org.',
        other_option: 'Other',
        click_upload: 'Click to upload…',
        dtl_full_name: 'Full Name:',
        dtl_email: 'Email:',
        dtl_phone: 'Phone:',
        dtl_role: 'Role:',
        dtl_reg_date: 'Registration Date:',
        dtl_status: 'Status:',
        dtl_approved: 'Approved ✓',
        dtl_hosp_name: 'Hospital Name:',
        dtl_bb_name: 'Blood Bank Name:',
        dtl_license_num: 'License Number:',
        dtl_issuer: 'Issuing Authority:',
        dtl_governorate: 'Governorate:',
        dtl_city: 'City:',
        dtl_address: 'Address:',
        dtl_maps: 'Google Maps:',
        dtl_med_director: 'Medical Director:',
        dtl_manager: 'Manager:',
        dtl_license_doc: 'License Document:',
        dtl_view_license_doc: 'View License Document',
        dtl_account_word: 'Account',
        dtl_reg_details: 'Registration Details',
        dtl_information_word: 'Information',
        confirm_reject: 'Are you sure you want to reject this user?',
    },
    ar: {
        nav_home: 'الرئيسية', nav_about: 'من نحن', nav_search: 'البحث عن دم',
        nav_dashboard: 'لوحة التحكم', nav_bloodbank: 'بنك الدم',
        nav_hospital: 'المستشفى', nav_admin: 'الإدارة',
        nav_signin: 'تسجيل الدخول', nav_signup: 'إنشاء حساب', nav_logout: 'تسجيل خروج',
        hero_badge: 'شبكة الموارد الحيوية',
        hero_title1: 'شريان', hero_title2: 'الحياة',
        hero_sub: 'نربط بنوك الدم والمستشفيات في مصر للقضاء على التأخير وإنقاذ الأرواح — فوراً.',
        hero_btn_search: 'ابحث عن دم الآن', hero_btn_learn: 'اعرف أكثر',
        hero_stat1: 'وحدة مُدارة', hero_stat2: 'مستشفى',
        hero_stat3: 'بنك دم', hero_stat4: 'حياة أُنقذت',
        stat_uptime: 'وقت التشغيل', stat_response: 'وقت الاستجابة',
        stat_types: 'فصائل الدم المتتبعة', stat_access: 'وصول عام مجاني',
        feat_tag: 'المزايا الأساسية', feat_title: 'كل ما تحتاجه لإنقاذ حياة',
        feat_sub: 'من البحث الفوري عن الدم إلى إدارة المخزون الكاملة — شريان الحياة يغطي كل نقطة حرجة.',
        feat1_title: 'بحث فوري عن الدم', feat1_desc: 'ابحث عن فصائل الدم المتاحة في جميع البنوك المتصلة فورياً. لا يلزم تسجيل دخول للمستخدمين العامين في حالات الطوارئ.',
        feat2_title: 'تتبع المخزون المباشر', feat2_desc: 'تُحدّث بنوك الدم المخزون في الوقت الفعلي. الوحدات وتواريخ الانتهاء وحالة التوفر دائماً دقيقة ومحدثة.',
        feat3_title: 'نظام الطلبات الرقمي', feat3_desc: 'ترسل المستشفيات طلبات الدم رقمياً. تقوم البنوك بالموافقة أو الرفض أو التنفيذ — مع تتبع كامل للحالة.',
        feat4_title: 'تنبيهات انخفاض المخزون', feat4_desc: 'تحذيرات تلقائية عند انخفاض فصيلة دم دون الحد الأدنى — تحث البنوك على الاستعداد مبكراً.',
        feat5_title: 'وصول حسب الدور', feat5_desc: 'لوحات تحكم مخصصة للمشرفين وبنوك الدم والمستشفيات. كل دور يرى ما يحتاجه فقط.',
        feat6_title: 'التحليلات والتقارير', feat6_desc: 'أدوات الإحصاء والتقارير على مستوى النظام تساعد المشرفين على المراقبة ورصد الاتجاهات والتصرف استباقياً.',
        bt_tag: 'المخزون المباشر', bt_title: 'توفر الدم الحالي',
        bt_sub: 'محدّث في الوقت الفعلي من جميع بنوك الدم المتصلة.',
        bt_search_btn: 'البحث عن التوفر →',
        how_tag: 'كيف يعمل', how_title: 'بسيط. سريع. ينقذ الأرواح.',
        step1_title: 'ابحث بفصيلة الدم', step1_desc: 'يمكن لأي شخص البحث عن فصيلة دم دون الحاجة إلى إنشاء حساب.',
        step2_title: 'عرض مواقع البنوك', step2_desc: 'اعرف أي البنوك لديها فصيلتك وموقعها ومعلومات التواصل فوراً.',
        step3_title: 'المستشفى يرسل الطلب', step3_desc: 'يمكن للمستشفيات المسجلة إرسال طلبات رقمية لأنواع وكميات محددة.',
        step4_title: 'بنك الدم يستجيب', step4_desc: 'تعتمد البنوك الطلبات أو تنفذها مع تحديث تلقائي للمخزون المباشر.',
        test_tag: 'شهادات', test_title: 'ماذا يقول الناس',
        test1: 'قلّص شريان الحياة وقت توفير الدم لدينا من ساعات إلى دقائق. في الحالات الحرجة، هذا الفارق يعني كل شيء.',
        test1_name: 'د. أحمد كامل', test1_role: 'رئيس الطوارئ، المركز الطبي بالقاهرة',
        test2: 'كان إدارة مخزوننا يستلزم شخصين بدوام كامل. الآن شخص واحد يديره في أقل من ساعة يومياً. نظام رائع.',
        test2_name: 'سارة المصري', test2_role: 'مديرة، بنك الدم المركزي',
        test3: 'احتاجت والدتي لفصيلة دم نادرة في منتصف الليل. وجدتها في 3 دقائق عبر البحث العام. هذا النظام ينقذ أرواحاً.',
        test3_name: 'محمد طارق', test3_role: 'أحد أفراد الأسرة — القاهرة',
        cta_title: 'كل ثانية مهمة.', cta_sub: 'لا تدع نقص الدم يكلف أرواحاً. استخدم شريان الحياة للعثور على الدم الذي تحتاجه — الآن.',
        cta_btn1: 'ابحث عن دم الآن', cta_btn2: 'تعرف على النظام',
        footer_desc: 'شبكة مركزية تربط المستشفيات وبنوك الدم في مصر للقضاء على التأخير وإنقاذ الأرواح في اللحظات الحرجة.',
        footer_nav: 'التنقل', footer_dashboards: 'لوحات التحكم',
        footer_emergency: 'جهات الطوارئ', footer_copy: '© 2026 شريان الحياة. جميع الحقوق محفوظة.',
        footer_made: 'صُمِّم بـ ❤️ لإنقاذ الأرواح.',
        about_tag: 'قصتنا', about_hero_title: 'عن شريان الحياة',
        about_hero_sub: 'نسعى للقضاء على نقص الدم وضمان توفره بأمان وكفاءة، لمنح كل مريض فرصة للشفاء وحياة مليئة بالأمل.',
        mission_tag: 'مهمتنا', mission_title: 'لماذا وُجد شريان الحياة',
        mission_p1: 'كل عام، يفقد آلاف المرضى في مصر وقتاً ثميناً — وأحياناً حياتهم — لمجرد أن المستشفى لم يجد فصيلة الدم المناسبة في الوقت المناسب.',
        mission_p2: 'أُنشئ شريان الحياة لإنهاء هذا الواقع. من خلال رقمنة عملية توفير الدم بالكامل، نتيح البحث الفوري والطلبات الرقمية وإدارة المخزون في الوقت الفعلي.',
        founded_label: 'تأسس', partners_label: 'مستشفى شريك', impact_label: 'حياة تأثرت',
        mission_img_title: 'كل قطرة تُحسب', mission_img_sub: 'تتبع في الوقت الفعلي. أثر حقيقي.',
        values_tag: 'قيمنا', values_title: 'ما يحرّكنا',
        val1_title: 'السرعة', val1_desc: 'في الطوارئ، الثواني مهمة. صممنا كل جزء من النظام لتقليل الاحتكاك وتعظيم السرعة.',
        val2_title: 'الشفافية', val2_desc: 'بيانات في الوقت الفعلي. لا تخمين. كل وحدة وكل بنك وكل طلب — مرئي بالكامل لمن يحتاج إلى التصرف.',
        val3_title: 'سهولة الوصول', val3_desc: 'يجب أن يتمكن أي شخص في أزمة من إيجاد الدم دون عوائق. البحث العام لا يتطلب حساباً ولا تسجيل دخول.',
        roles_tag: 'من يستخدم شريان الحياة', roles_title: 'مبني لكل أطراف السلسلة',
        role1_title: 'المستخدمون العامون', role1_desc: 'ابحث عن فصائل الدم بحرية. لا حاجة لحساب. اعثر على أقرب مصدر متاح في حالة الطوارئ فوراً.',
        role1_btn: 'ابحث الآن',
        role2_title: 'المستشفيات', role2_desc: 'تحقق من التوفر قبل الطلب. أرسل الطلبات رقمياً. تتبع حالة الموافقة في الوقت الفعلي.',
        role2_btn: 'بوابة المستشفى',
        role3_title: 'بنوك الدم', role3_desc: 'إدارة المخزون والاستجابة لطلبات المستشفيات وتلقي تنبيهات نقص المخزون والحفاظ على دقة البيانات.',
        role3_btn: 'بوابة البنك',
        role4_title: 'المشرفون', role4_desc: 'إدارة المستخدمين ومراقبة المخزون والطلبات على مستوى النظام بالكامل والإشراف على الجودة.',
        role4_btn: 'لوحة الإدارة',
        about_cta_title: 'مستعد لصنع الفارق؟',
        about_cta_sub: 'انضم إلى شريان الحياة وكن جزءاً من الشبكة التي تنقذ أرواحاً في مصر.',
        about_cta_btn: 'ابحث عن دم الآن →',
        search_badge: '🔍 لا يلزم تسجيل دخول',
        search_title: 'ابحث عن دم — الآن',
        search_sub: 'اختر فصيلة الدم لرؤية جميع المصادر المتاحة بالقرب منك.',
        search_label: 'فصيلة الدم', search_btn: 'ابحث الآن',
        search_quick: 'اختيار سريع:',
        search_default_title: 'ابحث عن فصيلة دم',
        search_default_sub: 'اختر فصيلة الدم أعلاه للعثور على جميع المصادر المتاحة.',
        search_no_result: 'لا نتائج لـ',
        search_no_sub: 'حاول لاحقاً أو تواصل مع البنوك القريبة مباشرة.',
        search_units: 'وحدة',
        emergency_title: '🚨 في حالة طوارئ تهدد الحياة؟',
        emergency_sub: 'اتصل بخط الدم الساخن أو خدمات الطوارئ فوراً.',
        emergency_btn1: 'اتصل 123 — الإسعاف',
        emergency_btn2: '0111-647-4444 خط الدم',
        bb_dash_title: 'لوحة تحكم بنك الدم',
        bb_dash_sub: 'أدر مخزونك، استجب للطلبات، وراقب مستويات المخزون.',
        bb_total: 'إجمالي الوحدات', bb_low: 'أنواع المخزون المنخفض',
        bb_pending: 'الطلبات المعلقة', bb_completed: 'المكتملة',
        bb_alerts_title: '⚠️ تنبيهات المخزون',
        bb_inv_title: 'مخزون الدم', bb_add_unit: '+ إضافة وحدة',
        bb_col_type: 'فصيلة الدم', bb_col_qty: 'الكمية',
        bb_col_expiry: 'تاريخ الانتهاء', bb_col_status: 'الحالة', bb_col_actions: 'الإجراءات',
        bb_type_label: 'فصيلة الدم', bb_qty_label: 'الكمية (وحدات)',
        bb_expiry_label: 'تاريخ الانتهاء', bb_add_btn: 'إضافة وحدة', bb_cancel: 'إلغاء',
        bb_req_title: 'طلبات المستشفيات',
        bb_req_sub: 'إدارة طلبات الدم الواردة من المستشفيات',
        bb_col_hosp: 'المستشفى', bb_col_date: 'التاريخ', bb_col_action: 'الإجراء',
        approve_btn: 'موافقة', reject_btn: 'رفض', delete_btn: 'حذف',
        edit_btn: 'تعديل', remove_btn: 'حذف',
        h_dash_title: 'لوحة تحكم المستشفى',
        h_dash_sub: 'تحقق من توفر الدم وأرسل الطلبات وتتبع طلباتك.',
        h_avail: 'الأنواع المتاحة', h_pending: 'الطلبات المعلقة',
        h_approved: 'المعتمدة', h_total: 'إجمالي الطلبات',
        h_avail_title: 'البحث عن توفر الدم',
        h_req_form_title: 'إرسال طلب دم',
        h_type_label: 'فصيلة الدم المطلوبة', h_qty_label: 'عدد الوحدات',
        h_send_btn: '✈ إرسال الطلب',
        h_history_title: 'سجل طلباتي',
        h_col_type: 'فصيلة الدم', h_col_qty: 'الكمية',
        h_col_date: 'تاريخ الإرسال', h_col_status: 'الحالة',
        h_col_bank: 'اسم بنك الدم',
        adm_title: 'لوحة تحكم المشرف',
        adm_sub: 'نظرة عامة على مستوى النظام — إدارة المستخدمين ومراقبة الطلبات وتتبع المخزون.',
        adm_total_units: 'إجمالي وحدات الدم', adm_total_reqs: 'إجمالي الطلبات',
        adm_users: 'المستخدمون المسجلون', adm_pending: 'الطلبات المعلقة',
        adm_status_title: 'حالة النظام', adm_status_val: '🟢 يعمل بشكل طبيعي',
        adm_status_sub: 'جميع الأنظمة تعمل', adm_updated: 'آخر تحديث', adm_sync: 'مزامنة فورية',
        adm_users_title: 'إدارة المستخدمين', adm_add_user: '+ إضافة مستخدم',
        adm_col_name: 'الاسم', adm_col_email: 'البريد الإلكتروني', adm_col_role: 'الدور', adm_col_actions: 'الإجراءات',
        adm_name_lbl: 'الاسم الكامل', adm_email_lbl: 'البريد الإلكتروني', adm_role_lbl: 'الدور',
        adm_role_ph: 'اختر الدور', adm_add_btn: 'إضافة مستخدم',
        adm_all_req_title: 'جميع طلبات النظام',
        status_good: 'جيد', status_low: 'منخفض', status_critical: 'حرج',
        status_pending: 'معلق', status_approved: 'معتمد',
        status_rejected: 'مرفوض', status_completed: 'مكتمل',
        status_available: 'متاح', status_low_stock: 'مخزون منخفض', status_unavailable: 'غير متاح',
        sb_overview: 'نظرة عامة', sb_stats: 'الإحصاءات', sb_management: 'الإدارة',
        sb_users: 'إدارة المستخدمين', sb_all_req: 'جميع الطلبات',
        sb_system: 'النظام', sb_public_search: 'البحث العام', sb_admin_panel: 'لوحة الإدارة', sb_contact_msgs: 'رسائل الاتصال',
        sb_hospitals: 'المستشفيات', sb_blood_banks: 'بنوك الدم',
        sb_notifications: 'الإشعارات', sb_notif_msg: 'الرسالة',
        sb_inventory: 'المخزون', sb_blood_units: 'وحدات الدم',
        sb_low_alerts: 'تنبيهات نقص المخزون', sb_requests: 'الطلبات',
        sb_incoming: 'الطلبات الواردة', sb_quick_links: 'روابط سريعة',
        sb_search_req: 'البحث والطلب', sb_availability: 'توفر الدم',
        sb_new_req: 'طلب جديد', sb_my_req: 'طلباتي', sb_history: 'سجل الطلبات',
        sb_settings: 'الإعدادات', sb_hospital_info: 'معلومات المستشفى', sb_bb_info: 'معلومات بنك الدم',
        sb_back: 'العودة للوحة التحكم',
        toast_req_sent: 'تم إرسال الطلب بنجاح!',
        toast_fill: 'يرجى ملء جميع الحقول.',
        toast_user_added: 'تم إضافة المستخدم بنجاح!',
        toast_user_removed: 'تم حذف المستخدم.',
        toast_unit_added: 'تمت إضافة وحدة الدم!',
        toast_unit_deleted: 'تم حذف الوحدة.',
        toast_request_approved: 'تمت الموافقة على الطلب!',
        toast_request_rejected: 'تم رفض الطلب.',
        loading_inv: 'جارٍ تحميل المخزون...', loading_req: 'جارٍ تحميل الطلبات...',
        loading_users: 'جارٍ تحميل المستخدمين...', no_requests: 'لا توجد طلبات بعد.',
        central_bank: 'بنك الدم المركزي', cairo_nasr: 'القاهرة - نصر سيتي',
        cairo_hosp: 'المركز الطبي بالقاهرة', cairo_helio: 'القاهرة - مصر الجديدة',
        nav_contact: 'اتصل بنا',
        nav_admins: 'المشرفين',
        contact_tag: 'تواصل معنا',
        contact_hero_title: 'اتصل بدعم شريان الحياة',
        contact_hero_sub: 'نحن هنا لمساعدة المستشفيات وبنوك الدم في جميع أنحاء مصر.',
        contact_form_title: 'أرسل لنا رسالة',
        contact_name_label: 'الاسم الكامل',
        contact_email_label: 'البريد الإلكتروني',
        contact_subject_label: 'الموضوع',
        contact_message_label: 'الرسالة',
        contact_send_btn: 'إرسال الرسالة',
        contact_success: 'تم استلام رسالتك بنجاح. سنقوم بحل مشكلتك في أقرب وقت ممكن.',
        contact_info_title: 'معلومات الاتصال',
        contact_email_title: 'دعم البريد الإلكتروني',
        contact_emergency_title: 'الخط الساخن للطوارئ',
        contact_hours_title: 'ساعات الخدمة',
        contact_hours_value: 'دعم على مدار الساعة للمستشفيات وبنوك الدم.',
        h_select_type: 'اختر فصيلة دم لرؤية المصادر المتاحة.',
        h_bank_label: 'اختر بنك الدم',
        bb_edit_title: 'تعديل المخزون',
        bb_save: 'حفظ التغييرات',
        adm_col_details: 'التفاصيل',
        footer_social_msg: 'قنوات شريان الحياة الرسمية قريباً.',
        confirm_delete: 'هل أنت متأكد؟',
        yes: 'نعم', no: 'لا',
        h_info_sub: 'عرض وتعديل معلومات ملف المستشفى.',
        bb_info_sub: 'عرض وتعديل معلومات ملف بنك الدم.',
        h_info_editable: 'معلومات قابلة للتعديل',
        bb_info_editable: 'معلومات قابلة للتعديل',
        h_info_readonly: 'معلومات للقراءة فقط',
        bb_info_readonly: 'معلومات للقراءة فقط',
        hosp_name: 'اسم المستشفى',
        h_phone_label: 'الهاتف الرسمي',
        h_email_label: 'البريد الإلكتروني الرسمي',
        h_governorate: 'المحافظة',
        h_city: 'المدينة',
        h_address: 'العنوان',
        h_med_director: 'اسم المدير الطبي',
        h_acct_owner: 'اسم صاحب الحساب',
        h_new_pass: 'كلمة المرور',
        h_pass_leave: '(اتركه فارغاً للاحتفاظ بالحالي)',
        h_license: 'رقم الترخيص',
        h_issuer: 'جهة الإصدار',
        h_role: 'الدور',
        h_approved: 'معتمد',
        h_reg_date: 'تاريخ التسجيل',
        h_lic_doc: 'وثيقة الترخيص',
        h_view_doc: 'عرض المستند',
        bb_name: 'اسم بنك الدم',
        bb_phone_label: 'الهاتف الرسمي',
        bb_email_label: 'البريد الإلكتروني الرسمي',
        bb_governorate: 'المحافظة',
        bb_city: 'المدينة',
        bb_address: 'العنوان',
        bb_working_hours: 'ساعات العمل',
        bb_manager: 'اسم المدير',
        bb_acct_owner: 'اسم صاحب الحساب',
        bb_new_pass: 'كلمة المرور',
        bb_license: 'رقم الترخيص',
        bb_issuer: 'جهة الإصدار',
        bb_role: 'الدور',
        bb_approved: 'معتمد',
        bb_reg_date: 'تاريخ التسجيل',
        bb_lic_doc: 'وثيقة الترخيص',
        bb_view_doc: 'عرض المستند',
        save_btn: 'حفظ التغييرات',
        nav_notifications: 'الإشعارات',
        adm_view_details: 'عرض التفاصيل',
        login_password_label: 'كلمة المرور',
        last_updated_none: 'لا يوجد نشاط حديث',
        rtl_brand_order: 'reversed',
        auth_back_home: 'العودة للرئيسية',
        lang_switch: 'English',
        welcome_back: 'مرحباً بعودتك',
        welcome_back_sub: 'سجّل الدخول للوصول إلى لوحة التحكم',
        signin_btn: 'تسجيل الدخول →',
        no_account: 'ليس لديك حساب؟',
        create_account: 'إنشاء حساب',
        create_account_sub: 'بصفتك ماذا تريد التسجيل؟',
        role_hospital_desc: 'منشأة طبية',
        role_bank_desc: 'مركز تخزين الدم',
        next_btn: 'التالي →',
        has_account: 'لديك حساب بالفعل؟',
        reg_hosp_title: 'تسجيل مستشفى',
        reg_bb_title: 'تسجيل بنك دم',
        reg_facility_sub: 'معلومات المنشأة الرسمية',
        reg_created_redirect: 'تم إنشاء الحساب! جارٍ التحويل…',
        sec_facility_info: 'معلومات المنشأة',
        reg_lic_doc_label: 'وثيقة الترخيص (PDF / صورة)',
        reg_city_district: 'المدينة / الحي',
        reg_gps_label: 'رابط GPS / خرائط جوجل',
        confirm_password: 'تأكيد كلمة المرور',
        reg_hosp_btn: 'تسجيل المستشفى →',
        reg_bb_btn: 'تسجيل بنك الدم →',
        change_role_btn: '← تغيير الدور',
        work_hours_from: 'ساعات العمل — من',
        work_hours_to: 'إلى',
        acct_info_section: 'معلومات الحساب',
        acct_security_section: 'أمان الحساب',
        loc_contact_section: 'الموقع والتواصل',
        operations_section: 'العمليات',
        facility_details_section: 'تفاصيل المنشأة',
        select_placeholder: 'اختر…',
        moh_option: 'وزارة الصحة',
        hio_option: 'هيئة التأمين الصحي',
        other_option: 'أخرى',
        click_upload: 'انقر للرفع…',
        dtl_full_name: 'الاسم الكامل:',
        dtl_email: 'البريد الإلكتروني:',
        dtl_phone: 'الهاتف:',
        dtl_role: 'الدور:',
        dtl_reg_date: 'تاريخ التسجيل:',
        dtl_status: 'الحالة:',
        dtl_approved: 'معتمد ✓',
        dtl_hosp_name: 'اسم المستشفى:',
        dtl_bb_name: 'اسم بنك الدم:',
        dtl_license_num: 'رقم الترخيص:',
        dtl_issuer: 'جهة الإصدار:',
        dtl_governorate: 'المحافظة:',
        dtl_city: 'المدينة:',
        dtl_address: 'العنوان:',
        dtl_maps: 'خرائط جوجل:',
        dtl_med_director: 'المدير الطبي:',
        dtl_manager: 'المدير:',
        dtl_license_doc: 'وثيقة الترخيص:',
        dtl_view_license_doc: 'عرض وثيقة الترخيص',
        dtl_account_word: 'حساب',
        dtl_reg_details: 'تفاصيل التسجيل',
        dtl_information_word: 'معلومات',
        confirm_reject: 'هل أنت متأكد أنك تريد رفض هذا المستخدم؟',
    }
};

let currentLang = localStorage.getItem('la_lang') || 'en';

function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('la_lang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    const isAr = currentLang === 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', t(key));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.setAttribute('title', t(key));
    });

    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.textContent = isAr ? 'English' : 'العربية';
    });

    // Flip main navbar: brand on the right + nav links on the left when Arabic
    document.querySelectorAll('nav.navbar > .container, nav.navbar > .container-fluid').forEach(navContainer => {
        const brand = navContainer.querySelector('.navbar-brand');
        const toggler = navContainer.querySelector('.navbar-toggler');
        const collapse = navContainer.querySelector('.navbar-collapse');
        if (brand && collapse) {
            navContainer.style.display = 'flex';
            navContainer.style.flexDirection = 'row';
            brand.style.order = isAr ? '3' : '1';
            if (toggler) toggler.style.order = '2';
            collapse.style.order = isAr ? '1' : '3';
        }
    });

    // Flip auth-page navbar (Login / Register etc.): brand right, back-link + lang-toggle left
    document.querySelectorAll('nav.auth-nav').forEach(navEl => {
        const brand = navEl.querySelector('.auth-nav-brand');
        const actions = navEl.querySelector('.nav-actions');
        if (brand && actions) {
            navEl.style.display = 'flex';
            navEl.style.flexDirection = 'row';
            brand.style.order = isAr ? '2' : '1';
            actions.style.order = isAr ? '1' : '2';
        }
    });

    if (document.getElementById('bloodUnitsTable')) fetchBloodBankData();
    if (document.getElementById('hospitalRequestsTable')) fetchHospitalData();
    if (document.getElementById('adminUsersTable')) fetchAdminData();

    updateSearchDefaults();
}

function updateSearchDefaults() {
    const results = document.getElementById('searchResults');
    if (results && results.querySelector('[data-search-default]')) {
        results.innerHTML = `
      <div class="text-center py-5" data-search-default style="color:var(--mid-gray);">
        <div style="font-size:4rem;margin-bottom:1rem;">🩸</div>
        <div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;color:var(--dark);margin-bottom:0.5rem;" data-i18n="search_default_title">${t('search_default_title')}</div>
        <div style="font-weight:300;" data-i18n="search_default_sub">${t('search_default_sub')}</div>
      </div>`;
    }
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.boxShadow = window.scrollY > 20
            ? '0 4px 30px rgba(192,57,43,0.15)'
            : '';
    }
});

// ─── SEARCH PAGE ────────────────────────────────────────────────────────────
function initSearch() {
    const form = document.getElementById('searchForm');
    const results = document.getElementById('searchResults');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const bloodType = document.getElementById('bloodType').value;
        if (!bloodType || bloodType === 'Select Blood Type') {
            results.innerHTML = `<div class="search-result-card" style="justify-content:center;color:var(--mid-gray);">${t('toast_fill')}</div>`;
            return;
        }
        try {
            const res = await fetch(`/Home/Search?bloodType=${encodeURIComponent(bloodType)}`);
            const data = await res.json();
            if (data.length === 0) {
                results.innerHTML = `<div class="search-result-card" style="justify-content:center;">
                    <div style="text-align:center;">
                      <div style="font-size:2.5rem;margin-bottom:8px;">😔</div>
                      <div style="font-weight:600;color:var(--dark);">${t('search_no_result')} ${bloodType}</div>
                      <div style="color:var(--mid-gray);font-size:0.88rem;">${t('search_no_sub')}</div>
                    </div>
                  </div>`;
                return;
            }
            results.innerHTML = data.map(item => {
                const s = getStatusConfig(item.status);
                return `
                  <div class="search-result-card">
                    <div class="result-blood-type">${item.bloodType}</div>
                    <div style="flex:1;">
                      <div class="result-bank-name">${item.bankName}</div>
                      <div class="result-location">📍 ${item.location}</div>
                      <div class="result-contact">📞 ${item.phone}</div>
                    </div>
                    <div style="text-align:${currentLang === 'ar' ? 'left' : 'right'};">
                      <div style="font-size:1.4rem;font-weight:700;font-family:'Playfair Display',serif;color:var(--dark);">${item.units} <span style="font-size:0.75rem;color:var(--mid-gray);font-family:'DM Sans',sans-serif;font-weight:400;">${t('search_units')}</span></div>
                      <span class="status-pill ${s.cls}">${t(s.key)}</span>
                    </div>
                  </div>`;
            }).join('');
        } catch (err) {
            results.innerHTML = `<div class="search-result-card" style="justify-content:center;color:var(--blood);">Error loading data.</div>`;
        }
    });
}

function getStatusConfig(status) {
    const map = {
        'Available': { key: 'status_available', cls: 'pill-available' },
        'Low Stock': { key: 'status_low_stock', cls: 'pill-low' },
        'Unavailable': { key: 'status_unavailable', cls: 'pill-unavailable' },
        'Critical': { key: 'status_critical', cls: 'pill-unavailable' },
        'Good': { key: 'status_good', cls: 'pill-available' },
        'Low': { key: 'status_low', cls: 'pill-low' },
    };
    return map[status] || { key: status, cls: 'pill-unavailable' };
}

// ─── BLOOD BANK DASHBOARD ────────────────────────────────────────────────────
function fetchBloodBankData() {
    fetchStats();
    fetchInventory();
    fetchBankRequests();
}

async function fetchStats() {
    try {
        const res = await fetch('/BloodBank/GetStats');
        const data = await res.json();
        const el = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
        el('bbTotalUnits', data.totalUnits || 0);
        el('bbLowStock', data.lowStock || 0);
        el('bbPendingReqs', data.pending || 0);
        el('bbCompletedReqs', data.completed || 0);
    } catch (e) {}
}

async function fetchInventory() {
    const tbody = document.getElementById('bloodUnitsTable');
    if (!tbody) return;
    try {
        const res = await fetch('/BloodBank/GetInventory');
        const units = await res.json();
        if (units.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--mid-gray);padding:2rem;">${t('loading_inv')}</td></tr>`;
            return;
        }
        tbody.innerHTML = units.map(u => {
            const statusKey = u.quantity <= 5 ? 'status_critical' : u.quantity <= 15 ? 'status_low' : 'status_good';
            const statusClass = u.quantity <= 5 ? 'avail-low' : u.quantity <= 15 ? 'avail-med' : 'avail-high';
            return `
              <tr>
                <td><span style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.1rem;color:var(--blood)">${u.bloodType}</span></td>
                <td><strong>${u.quantity}</strong> ${t('search_units')}</td>
                <td>${u.expiryDate}</td>
                <td><span class="blood-type-avail ${statusClass}">${t(statusKey)}</span></td>
                <td>
                  <button class="btn-dash-sm" onclick="editUnit(${u.id})">${t('edit_btn')}</button>
                  <button class="btn-dash-sm" style="background:transparent;border:1px solid rgba(192,57,43,0.3);color:var(--blood);margin-left:4px;" onclick="deleteUnit(${u.id})">${t('remove_btn')}</button>
                </td>
              </tr>`;
        }).join('');
        renderLowStockAlerts(units);
    } catch (e) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--mid-gray);padding:2rem;">Error loading inventory.</td></tr>`;
    }
}

async function fetchBankRequests() {
    const tbody = document.getElementById('bankRequestsTable');
    if (!tbody) return;
    try {
        const res = await fetch('/BloodBank/GetRequests');
        const requests = await res.json();
        if (requests.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--mid-gray);padding:2rem;">${t('no_requests')}</td></tr>`;
            return;
        }
        tbody.innerHTML = requests.map(r => `
          <tr>
            <td>${r.hospital}</td>
            <td><span style="font-family:'Playfair Display',serif;font-weight:700;color:var(--blood)">${r.bloodType}</span></td>
            <td>${r.quantity}</td>
            <td>${r.date}</td>
            <td><span class="req-${r.status.toLowerCase()}">${t('status_' + r.status.toLowerCase())}</span></td>
            <td>
              ${r.status === 'Pending' ? `
                <button class="btn-dash-sm" onclick="approveRequest(${r.id})">${t('approve_btn')}</button>
                <button class="btn-dash-sm" style="background:rgba(231,76,60,0.15);color:#C0392B;margin-left:4px;" onclick="rejectRequest(${r.id})">${t('reject_btn')}</button>
              ` : `<span class="req-${r.status.toLowerCase()}">${t('status_' + r.status.toLowerCase())}</span>`}
            </td>
          </tr>`).join('');
    } catch (e) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--mid-gray);padding:2rem;">Error loading requests.</td></tr>`;
    }
}

function renderLowStockAlerts(units) {
    const container = document.getElementById('lowStockAlerts');
    if (!container) return;
    const low = units.filter(u => u.quantity <= 15);
    if (low.length === 0) {
        container.innerHTML = `<div style="color:var(--mid-gray);font-size:0.9rem;">✅ ${currentLang === 'ar' ? 'جميع مستويات المخزون جيدة' : 'All stock levels are good.'}</div>`;
        return;
    }
    container.innerHTML = low.map(u => {
        const severity = u.quantity <= 5 ? (currentLang === 'ar' ? 'حرج' : 'CRITICAL') : (currentLang === 'ar' ? 'منخفض' : 'LOW');
        const msg = currentLang === 'ar'
            ? `${u.bloodType} — ${u.quantity} وحدات متبقية (${severity})`
            : `${u.bloodType} — ${u.quantity} units remaining (${severity})`;
        return `<div class="low-stock-alert mb-2">⚠️ ${msg}</div>`;
    }).join('');
}

function toggleAddUnit() {
    const panel = document.getElementById('addUnitPanel');
    if (panel) panel.classList.toggle('visible');
}

async function addUnit() {
    const type = document.getElementById('unitBloodType').value;
    const qty = parseInt(document.getElementById('unitQuantity').value);
    const expiry = document.getElementById('unitExpiry').value;
    if (!type || type.includes('Select') || isNaN(qty) || !expiry)
        return showToast(t('toast_fill'), 'error');

    try {
        const res = await fetch('/BloodBank/AddInventory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `bloodType=${encodeURIComponent(type)}&quantity=${qty}&expiryDate=${encodeURIComponent(expiry)}`
        });
        const data = await res.json();
        if (data.success) {
            showToast(t('toast_unit_added'));
            document.getElementById('addUnitPanel').classList.remove('visible');
            document.getElementById('unitBloodType').value = 'Select Type';
            document.getElementById('unitQuantity').value = '';
            document.getElementById('unitExpiry').value = '';
            fetchInventory();
            fetchStats();
        } else {
            showToast(data.message || t('toast_fill'), 'error');
        }
    } catch (e) {
        showToast('Error adding unit.', 'error');
    }
}

async function editUnit(id) {
    try {
        const res = await fetch(`/BloodBank/GetInventoryItem?id=${id}`);
        const item = await res.json();
        if (!item) return showToast('Error loading item.', 'error');
        document.getElementById('editInventoryId').value = item.id;
        document.getElementById('editBloodType').value = item.bloodType;
        document.getElementById('editQuantity').value = item.quantity;
        document.getElementById('editExpiry').value = item.expiryDate;
        const modal = new bootstrap.Modal(document.getElementById('editInventoryModal'));
        modal.show();
    } catch (e) {
        showToast('Error loading item.', 'error');
    }
}

async function saveInventoryEdit() {
    const id = parseInt(document.getElementById('editInventoryId').value);
    const bloodType = document.getElementById('editBloodType').value;
    const qty = parseInt(document.getElementById('editQuantity').value);
    const expiry = document.getElementById('editExpiry').value;
    if (isNaN(qty) || !bloodType || !expiry)
        return showToast(t('toast_fill'), 'error');
    try {
        const res = await fetch('/BloodBank/UpdateInventory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `id=${id}&quantity=${qty}&bloodType=${encodeURIComponent(bloodType)}&expiryDate=${encodeURIComponent(expiry)}`
        });
        const data = await res.json();
        if (data.success) {
            showToast(t('toast_unit_added'));
            bootstrap.Modal.getInstance(document.getElementById('editInventoryModal')).hide();
            fetchInventory();
            fetchStats();
        } else {
            showToast(data.message || 'Error', 'error');
        }
    } catch (e) {
        showToast('Error updating unit.', 'error');
    }
}

async function deleteUnit(id) {
    if (!confirm(t('confirm_delete'))) return;
    try {
        const res = await fetch('/BloodBank/DeleteInventory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `id=${id}`
        });
        const data = await res.json();
        if (data.success) {
            showToast(t('toast_unit_deleted'), 'info');
            fetchInventory();
            fetchStats();
        }
    } catch (e) {
        showToast('Error deleting unit.', 'error');
    }
}

async function approveRequest(id) {
    try {
        const res = await fetch('/BloodBank/ApproveRequest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `id=${id}`
        });
        const data = await res.json();
        if (data.success) {
            showToast(t('toast_request_approved'));
            fetchBankRequests();
            fetchInventory();
            fetchStats();
        } else {
            showToast(data.message || 'Error', 'error');
        }
    } catch (e) {
        showToast('Error approving request.', 'error');
    }
}

async function rejectRequest(id) {
    try {
        const res = await fetch('/BloodBank/RejectRequest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `id=${id}`
        });
        const data = await res.json();
        if (data.success) {
            showToast(t('toast_request_rejected'));
            fetchBankRequests();
        }
    } catch (e) {
        showToast('Error rejecting request.', 'error');
    }
}

// ─── HOSPITAL DASHBOARD ──────────────────────────────────────────────────────
function fetchHospitalData() {
    fetchHospitalStats();
    fetchHospitalRequests();
    loadApprovedBloodBanks();
}

async function fetchHospitalStats() {
    try {
        const res = await fetch('/Hospital/GetStats');
        const data = await res.json();
        const el = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
        el('hAvailTypes', data.availableTypes || 0);
        el('hPendingReqs', data.pending || 0);
        el('hApprovedReqs', data.approved || 0);
        el('hTotalReqs', data.total || 0);
    } catch (e) {}
}

async function fetchHospitalRequests() {
    const tbody = document.getElementById('hospitalRequestsTable');
    if (!tbody) return;
    try {
        const res = await fetch('/Hospital/GetMyRequests');
        const requests = await res.json();
        if (requests.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--mid-gray);padding:2rem;">${t('no_requests')}</td></tr>`;
            return;
        }
        tbody.innerHTML = requests.map(r => `
          <tr>
            <td><span style="font-family:'Playfair Display',serif;font-weight:700;color:var(--blood)">${r.bloodType}</span></td>
            <td>${r.quantity} ${t('search_units')}</td>
            <td>${r.bloodBankName || '—'}</td>
            <td>${r.date}</td>
            <td><span class="req-${r.status.toLowerCase()}">${t('status_' + r.status.toLowerCase())}</span></td>
          </tr>`).join('');
    } catch (e) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--mid-gray);padding:2rem;">Error loading requests.</td></tr>`;
    }
}

async function fetchHospitalBloodAvailability() {
    const container = document.getElementById('availableBloodGrid');
    if (!container) return;
    const bloodType = document.getElementById('hospAvailBloodType').value;
    if (!bloodType) {
        container.innerHTML = `<div class="col-12" style="text-align:center;color:var(--mid-gray);padding:2rem;">${t('h_select_type')}</div>`;
        return;
    }
    try {
        const res = await fetch(`/Hospital/GetAvailableBlood?bloodType=${encodeURIComponent(bloodType)}`);
        const units = await res.json();
        if (units.length === 0) {
            container.innerHTML = `<div class="col-12" style="text-align:center;color:var(--mid-gray);padding:2rem;">${t('search_no_result')} ${bloodType}</div>`;
            return;
        }
        container.innerHTML = units.map(u => {
            const statusKey = u.quantity <= 5 ? 'status_critical' : u.quantity <= 15 ? 'status_low' : 'status_available';
            const statusClass = u.quantity <= 5 ? 'avail-low' : u.quantity <= 15 ? 'avail-med' : 'avail-high';
            return `
              <div class="col-12">
                <div class="search-result-card">
                  <div class="result-blood-type">${u.bloodType}</div>
                  <div style="flex:1;">
                    <div class="result-bank-name">${u.bankName}</div>
                    <div class="result-location">📍 ${u.bankLocation}</div>
                  </div>
                  <div style="text-align:${currentLang === 'ar' ? 'left' : 'right'};">
                    <div style="font-size:1.4rem;font-weight:700;font-family:'Playfair Display',serif;color:var(--dark);">${u.quantity} <span style="font-size:0.75rem;color:var(--mid-gray);font-family:'DM Sans',sans-serif;font-weight:400;">${t('search_units')}</span></div>
                    <span class="blood-type-avail ${statusClass}">${t(statusKey)}</span>
                  </div>
                </div>
              </div>`;
        }).join('');
    } catch (e) {
        container.innerHTML = `<div class="col-12" style="text-align:center;color:var(--mid-gray);padding:2rem;">Error loading availability.</div>`;
    }
}

async function loadApprovedBloodBanks() {
    const select = document.getElementById('requestBloodBank');
    if (!select) return;
    try {
        const res = await fetch('/Hospital/GetApprovedBloodBanks');
        const banks = await res.json();
        select.innerHTML = `<option value="">${currentLang === 'ar' ? 'اختر بنك الدم' : 'Select Blood Bank'}</option>` +
            banks.map(b => `<option value="${b.id}">${b.name}</option>`).join('');
    } catch (e) {}
}

async function addHospitalRequest(e) {
    e.preventDefault();
    const type = document.getElementById('requestBloodType').value;
    const qty = parseInt(document.getElementById('requestQuantity').value);
    const bankId = parseInt(document.getElementById('requestBloodBank').value);
    if (!type || type.includes('Select') || isNaN(qty) || !bankId)
        return showToast(t('toast_fill'), 'error');

    try {
        const res = await fetch('/Hospital/CreateRequest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `bloodType=${encodeURIComponent(type)}&quantity=${qty}&bloodBankId=${bankId}`
        });
        const data = await res.json();
        if (data.success) {
            showToast(t('toast_req_sent'));
            e.target.reset();
            fetchHospitalData();
        } else {
            showToast(data.message || t('toast_fill'), 'error');
        }
    } catch (err) {
        showToast('Error sending request.', 'error');
    }
}

// ─── ADMIN DASHBOARD ─────────────────────────────────────────────────────────
function fetchAdminData() {
    fetchAdminStats();
    fetchAllRequests();
    fetchContactMessages();
}

async function fetchAdminStats() {
    try {
        const res = await fetch('/Admin/GetStats');
        const data = await res.json();
        const el = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
        el('statTotalUnits', data.totalBloodUnits || 0);
        el('statTotalReqs', data.totalRequests || 0);
        el('statTotalUsers', data.totalUsers || 0);
        el('statPending', data.pendingRequests || 0);
    } catch (e) {}
}

async function fetchAllRequests() {
    const tbody = document.getElementById('allRequestsTable');
    if (!tbody) return;
    try {
        const res = await fetch('/Admin/GetRequests');
        const requests = await res.json();
        if (requests.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--mid-gray);padding:2rem;">${t('no_requests')}</td></tr>`;
            return;
        }
        tbody.innerHTML = requests.map(r => `
          <tr>
            <td>${r.hospital}</td>
            <td><span style="font-family:'Playfair Display',serif;font-weight:700;color:var(--blood)">${r.bloodType}</span></td>
            <td>${r.quantity}</td>
            <td>${r.bloodBankName || '—'}</td>
            <td>${r.date}</td>
            <td><span class="req-${r.status.toLowerCase()}">${t('status_' + r.status.toLowerCase())}</span></td>
          </tr>`).join('');
    } catch (e) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--mid-gray);padding:2rem;">Error loading requests.</td></tr>`;
    }
}

async function fetchContactMessages() {
    const tbody = document.getElementById('contactMessagesTable');
    if (!tbody) return;
    try {
        const res = await fetch('/Admin/GetContactMessages');
        const messages = await res.json();
        if (messages.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--mid-gray);padding:2rem;">${t('no_requests')}</td></tr>`;
            return;
        }
        tbody.innerHTML = messages.map(m => `
          <tr>
            <td>${m.fullName}</td>
            <td>${m.email}</td>
            <td>${m.subject}</td>
            <td style="max-width:250px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${m.message.replace(/"/g,'&quot;')}">${m.message}</td>
            <td>${m.date}</td>
          </tr>`).join('');
    } catch (e) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--mid-gray);padding:2rem;">Error loading messages.</td></tr>`;
    }
}

// ─── ADMIN USER FILTER ─────────────────────────────────────────────────────────
function filterUsers(role) {
    const rows = document.querySelectorAll('#adminUsersTable tbody tr[data-role]');
    rows.forEach(r => {
        r.style.display = (role === 'All' || r.dataset.role === role) ? '' : 'none';
    });
}

// ─── TOAST NOTIFICATION ──────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
    const existing = document.querySelector('.la-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'la-toast';
    const color = type === 'error' ? '#C0392B' : type === 'info' ? '#2980B9' : '#27AE60';
    const side = currentLang === 'ar' ? 'left:30px;right:auto' : 'right:30px;left:auto';
    toast.style.cssText = `
    position:fixed;bottom:30px;${side};z-index:9999;
    background:${color};color:#fff;
    padding:14px 24px;border-radius:12px;
    font-family:'DM Sans',sans-serif;font-weight:600;font-size:0.9rem;
    box-shadow:0 8px 30px rgba(0,0,0,0.2);
    animation:fadeInUp 0.3s ease;max-width:320px;`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = '0', 2800);
    setTimeout(() => toast.remove(), 3000);
}

// ─── REGISTRATION ────────────────────────────────────────────────────────────
let selectedRole = null;

function selectRole(btn) {
    document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
    btn.classList.add('selected');
    selectedRole = btn.dataset.role;
    document.getElementById('roleAlert').classList.remove('show');
}

function goToForm() {
    if (!selectedRole) {
        const alert = document.getElementById('roleAlert');
        alert.classList.add('show');
        alert.querySelector('span').textContent = currentLang === 'ar' ? 'يرجى اختيار دور' : 'Please select a role.';
        return;
    }
    window.location.href = '/Account/' + selectedRole + 'Register';
}

function toggleLang() { toggleLanguage(); }

function togglePass(inputId, btn) {
    const inp = document.getElementById(inputId);
    if (!inp) return;
    const icon = btn.querySelector('i');
    if (inp.type === 'password') {
        inp.type = 'text';
        if (icon) icon.className = 'bi bi-eye';
    } else {
        inp.type = 'password';
        if (icon) icon.className = 'bi bi-eye-slash';
    }
}

function updateFileLabel(input, labelId) {
    const lbl = document.getElementById(labelId);
    if (lbl && input.files && input.files[0]) lbl.textContent = input.files[0].name;
}
// ─── SIDEBAR ACTIVE LINK ──────────────────────────────────────────────────────
function initSidebar() {
    const links = document.querySelectorAll('.sidebar-link[data-filter]');
    const allLink = document.querySelector('.sidebar-link[data-filter="All"]');

    function applyFilter(link) {
        const role = link.dataset.filter;
        document.querySelectorAll('.sidebar-link[data-filter]').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        filterUsers(role);
    }

    links.forEach(link => {
        link.addEventListener('click', e => {
            applyFilter(link);
        });
    });

    const allLinks = document.querySelectorAll('.sidebar-link');
    const hash = window.location.hash || (allLinks.length > 0 ? allLinks[0].getAttribute('href') : '');

    allLinks.forEach(link => {
        link.classList.remove('active');
        if (!link.hasAttribute('data-filter') && link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });

    if (allLink) applyFilter(allLink);

    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash;
        allLinks.forEach(link => {
            link.classList.remove('active');
            if (!link.hasAttribute('data-filter') && link.getAttribute('href') === newHash) {
                link.classList.add('active');
            }
        });
    });
}

// ─── INIT ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    initSearch();
    fetchBloodBankData();
    fetchHospitalData();
    fetchAdminData();
    initSidebar();

    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current.toLocaleString();
            if (current >= target) clearInterval(timer);
        }, 25);
    });
});
