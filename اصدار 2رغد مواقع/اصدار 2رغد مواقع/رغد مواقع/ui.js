(() => {
  const root = document.documentElement;
  const body = document.body;
  const zoomLabel = document.getElementById("zoomLabel");
  const zoomIn = document.getElementById("zoomIn");
  const zoomOut = document.getElementById("zoomOut");
  const themeButtons = document.querySelectorAll("[data-theme]");
  const languageButtons = document.querySelectorAll("[data-lang]");

  const i18nTextNodes = document.querySelectorAll("[data-i18n]");
  const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
  const i18nAria = document.querySelectorAll("[data-i18n-aria-label]");
  const i18nAlt = document.querySelectorAll("[data-i18n-alt]");

  const translations = {
    en: {
      "brand.title": "Loving Homes",
      "brand.subtitle": "Dog Hotel",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.packages": "Packages",
      "nav.booking": "Booking",
      "nav.gallery": "Gallery",
      "nav.blog": "Blog",
      "nav.tips": "Dog Care Tips",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "footer.copy": "© 2026 Loving Homes Dog Hotel",
      "util.day": "Day",
      "util.night": "Night",
      "util.ar": "Arabic",
      "util.en": "English",
      "zoom.out": "Zoom out",
      "zoom.in": "Zoom in",
      "common.hero.body":
        "The best place for your dog. We provide a safe, friendly and comfortable environment where dogs can stay, play and receive professional care while their owners are away.",
      "common.card.care.title": "Professional Dog Care",
      "common.card.care.body":
        "Our trained staff provide daily care including grooming, walking, feeding and fun activities to keep every dog happy and healthy.",
      "common.card.safe.title": "Safe and Comfortable Environment",
      "common.card.safe.body":
        "Our dog hotel includes indoor and outdoor play areas, comfortable resting spaces and constant supervision to ensure safety and comfort.",
      "index.eyebrow": "Welcome",
      "index.title": "Loving Homes Dog Hotel",
      "index.section": "Why Families Choose Us",
      "about.eyebrow": "About Us",
      "about.title": "Welcome to Loving Homes",
      "about.section": "What Makes Us Different",
      "services.eyebrow": "Services",
      "services.title": "Our Professional Services",
      "services.lead":
        "Every dog receives attentive care, enriching activities, and a safe environment tailored to their needs.",
      "services.section": "Our Services",
      "services.card.groom.title": "Dog Grooming",
      "services.card.groom.body":
        "Professional grooming including bathing, brushing, nail trimming and coat care.",
      "services.card.walk.title": "Dog Walking",
      "services.card.walk.body":
        "Daily walks in safe outdoor areas to keep dogs active and healthy.",
      "services.card.vet.title": "Veterinary Care",
      "services.card.vet.body":
        "24 hour veterinary monitoring to ensure every dog stays healthy.",
      "services.card.indoor.title": "Indoor Play Area",
      "services.card.indoor.body":
        "A comfortable indoor space where dogs can play and socialize safely.",
      "services.card.outdoor.title": "Outdoor Grass Area",
      "services.card.outdoor.body":
        "A large green area where dogs can run, explore and enjoy fresh air.",
      "services.card.train.title": "Dog Training",
      "services.card.train.body":
        "Basic training sessions to help dogs improve behavior and obedience.",
      "packages.eyebrow": "Packages",
      "packages.title": "Dog Care Packages",
      "packages.lead":
        "Choose a plan that fits your dog's schedule, personality, and activity level.",
      "packages.section": "Choose the Best Package for Your Dog",
      "packages.card.premium.title": "Premium Package",
      "packages.card.premium.item1": "4 walks per day",
      "packages.card.premium.item2": "4 daily activities",
      "packages.card.premium.item3": "Private grass play area",
      "packages.card.premium.item4": "Daily photo updates",
      "packages.card.premium.item5": "Special treats",
      "packages.card.classic.title": "Classic Package",
      "packages.card.classic.item1": "3 walks per day",
      "packages.card.classic.item2": "Indoor play area",
      "packages.card.classic.item3": "Relaxing rest area",
      "packages.card.classic.item4": "Grooming session",
      "packages.card.classic.item5": "Daily care",
      "packages.card.day.title": "Day Care Package",
      "packages.card.day.item1": "2 walks per day",
      "packages.card.day.item2": "Outdoor play area",
      "packages.card.day.item3": "Agility track",
      "packages.card.day.item4": "Sand digging pit",
      "packages.card.day.item5": "Fun group activities",
      "packages.book": "Book Now",
      "booking.eyebrow": "Booking",
      "booking.title": "Book a Stay",
      "booking.lead":
        "Send your details and we will confirm your reservation as soon as possible.",
      "booking.form.title": "Reservation Form",
      "booking.owner_name.label": "Owner Name",
      "booking.owner_name.placeholder": "Your Name",
      "booking.owner_phone.label": "Phone",
      "booking.owner_phone.placeholder": "Phone Number",
      "booking.owner_email.label": "Email",
      "booking.owner_email.placeholder": "Your Email",
      "booking.package.label": "Package",
      "booking.package.placeholder": "Select a package",
      "booking.check_in.label": "Check-in Date",
      "booking.check_out.label": "Check-out Date",
      "booking.dog_name.label": "Dog Name",
      "booking.dog_name.placeholder": "Dog Name",
      "booking.notes.label": "Notes",
      "booking.notes.placeholder": "Allergies, medications, special needs...",
      "booking.button": "Confirm Booking",
      "booking.status":
        "Thanks! We received your request and will contact you soon.",
      "booking.info.title": "Before You Book",
      "booking.info.item1": "Please bring your dog's food and any medications.",
      "booking.info.item2": "We recommend a favorite toy or blanket for comfort.",
      "booking.info.item3": "For questions, reach us via the Contact page.",
      "gallery.eyebrow": "Gallery",
      "gallery.title": "Our Dog Gallery",
      "gallery.lead": "Snapshots of happy stays, playful moments, and loving care.",
      "gallery.section": "Moments From Our Dog Hotel",
      "gallery.alt1": "Dog portrait",
      "gallery.alt2": "Dog running",
      "gallery.alt3": "Dog close-up",
      "gallery.alt4": "Happy dog",
      "gallery.alt5": "Dog with tongue out",
      "gallery.alt6": "Dog looking up",
      "blog.eyebrow": "Blog",
      "blog.title": "Dog Care Blog",
      "blog.lead": "Guides and insights for keeping your dog healthy, active, and loved.",
      "blog.section": "Latest Articles",
      "blog.post1.title": "How to Keep Your Dog Healthy",
      "blog.post1.body":
        "Keeping your dog healthy requires proper nutrition, daily exercise, regular veterinary checkups and lots of love. Dogs that stay active and receive proper care usually live longer and happier lives.",
      "blog.post2.title": "Why Dogs Need Daily Walks",
      "blog.post2.body":
        "Daily walks are important for both physical and mental health. Walking helps dogs burn energy, explore new environments and reduce stress or boredom.",
      "blog.post3.title": "Tips for Grooming Your Dog",
      "blog.post3.body":
        "Regular grooming keeps your dog's coat clean and healthy. Brushing the fur, trimming nails and bathing your dog helps prevent skin problems and keeps them comfortable.",
      "tips.eyebrow": "Tips",
      "tips.title": "Dog Care Tips",
      "tips.lead":
        "Simple habits that help your dog feel safe, healthy, and happy every day.",
      "tips.section": "Essential Tips for Your Dog",
      "tips.card.diet.title": "Healthy Diet",
      "tips.card.diet.body":
        "Feed your dog balanced meals and avoid harmful human foods.",
      "tips.card.exercise.title": "Daily Exercise",
      "tips.card.exercise.body":
        "Take your dog for regular walks and play to keep them active.",
      "tips.card.groom.title": "Grooming",
      "tips.card.groom.body":
        "Brush and bathe your dog regularly to maintain a healthy coat.",
      "tips.card.vet.title": "Regular Vet Visits",
      "tips.card.vet.body":
        "Schedule checkups to prevent illnesses and ensure vaccinations are up to date.",
      "tips.card.water.title": "Proper Hydration",
      "tips.card.water.body":
        "Always provide fresh water, especially during hot days.",
      "contact.eyebrow": "Contact",
      "contact.title": "Get in Touch",
      "contact.lead": "We are ready to answer your questions and help plan your dog's stay.",
      "contact.form.title": "Send Us a Message",
      "contact.placeholder.name": "Your Name",
      "contact.placeholder.email": "Your Email",
      "contact.placeholder.message": "Your Message",
      "contact.button": "Send Message",
      "contact.info.title": "Our Contact Information",
      "contact.info.phone": "Phone: +962 79 000 0000",
      "contact.info.email": "Email: info@lovinghomes.com",
      "contact.info.location": "Location: Amman, Jordan",
      "faq.eyebrow": "FAQ",
      "faq.title": "Frequently Asked Questions",
      "faq.lead": "Clear answers to the most common questions about our dog hotel.",
      "faq.section": "Your Questions Answered",
      "faq.q1": "What should I bring for my dog?",
      "faq.a1":
        "Bring your dog's food, any medications, and a favorite toy or blanket for comfort.",
      "faq.q2": "Are dogs supervised all day?",
      "faq.a2":
        "Yes. Our team monitors dogs throughout the day, including play, rest, and meal times.",
      "faq.q3": "Can my dog have a private space?",
      "faq.a3":
        "We offer comfortable private areas for dogs who need quiet time or extra rest.",
      "faq.q4": "How do you handle special diets?",
      "faq.a4":
        "We follow your feeding instructions carefully and can accommodate special diets.",
      "faq.q5": "What are your check-in times?",
      "faq.a5":
        "Check-in is available from 8:00 AM to 7:00 PM. Contact us for special arrangements.",
      "faq.q6": "Do you provide photo updates?",
      "faq.a6":
        "Yes. We can send daily photo updates so you can see how your dog is doing."
    },
    ar: {
      "brand.title": "لوفينغ هومز",
      "brand.subtitle": "فندق للكلاب",
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.services": "الخدمات",
      "nav.packages": "الباقات",
      "nav.booking": "الحجز",
      "nav.gallery": "المعرض",
      "nav.blog": "المدونة",
      "nav.tips": "نصائح العناية بالكلاب",
      "nav.faq": "الأسئلة الشائعة",
      "nav.contact": "تواصل معنا",
      "footer.copy": "© 2026 فندق لوفينغ هومز للكلاب",
      "util.day": "صباحي",
      "util.night": "ليلي",
      "util.ar": "العربية",
      "util.en": "English",
      "zoom.out": "تصغير",
      "zoom.in": "تكبير",
      "common.hero.body":
        "أفضل مكان لكلبك. نوفر بيئة آمنة وودودة ومريحة حيث يمكن للكلاب الإقامة واللعب وتلقي رعاية احترافية أثناء غياب أصحابها.",
      "common.card.care.title": "رعاية احترافية للكلاب",
      "common.card.care.body":
        "يوفر طاقمنا المدرب رعاية يومية تشمل التنظيف والمشي والتغذية والأنشطة الممتعة للحفاظ على سعادة كل كلب وصحته.",
      "common.card.safe.title": "بيئة آمنة ومريحة",
      "common.card.safe.body":
        "يضم فندق الكلاب مناطق لعب داخلية وخارجية، ومساحات استراحة مريحة، وإشرافاً مستمراً لضمان السلامة والراحة.",
      "index.eyebrow": "مرحباً",
      "index.title": "فندق لوفينغ هومز للكلاب",
      "index.section": "لماذا تختارنا العائلات",
      "about.eyebrow": "من نحن",
      "about.title": "مرحباً بكم في لوفينغ هومز",
      "about.section": "ما الذي يميزنا",
      "services.eyebrow": "الخدمات",
      "services.title": "خدماتنا الاحترافية",
      "services.lead":
        "كل كلب يحصل على رعاية دقيقة وأنشطة محفزة وبيئة آمنة تناسب احتياجاته.",
      "services.section": "خدماتنا",
      "services.card.groom.title": "تنظيف وتجميل الكلاب",
      "services.card.groom.body":
        "تنظيف احترافي يشمل الاستحمام والتمشيط وقص الأظافر والعناية بالفراء.",
      "services.card.walk.title": "تمشية الكلاب",
      "services.card.walk.body":
        "تمشيات يومية في مناطق خارجية آمنة للحفاظ على نشاط الكلاب وصحتها.",
      "services.card.vet.title": "رعاية بيطرية",
      "services.card.vet.body":
        "مراقبة بيطرية على مدار الساعة لضمان صحة كل كلب.",
      "services.card.indoor.title": "منطقة لعب داخلية",
      "services.card.indoor.body":
        "مساحة داخلية مريحة حيث يمكن للكلاب اللعب والتفاعل بأمان.",
      "services.card.outdoor.title": "منطقة عشب خارجية",
      "services.card.outdoor.body":
        "منطقة عشبية واسعة للركض والاستكشاف والاستمتاع بالهواء النقي.",
      "services.card.train.title": "تدريب الكلاب",
      "services.card.train.body":
        "جلسات تدريب أساسية لمساعدة الكلاب على تحسين السلوك والطاعة.",
      "packages.eyebrow": "الباقات",
      "packages.title": "باقات رعاية الكلاب",
      "packages.lead":
        "اختر الخطة التي تناسب جدول كلبك وشخصيته ومستوى نشاطه.",
      "packages.section": "اختر أفضل باقة لكلبك",
      "packages.card.premium.title": "الباقة المميزة",
      "packages.card.premium.item1": "4 تمشيات يومياً",
      "packages.card.premium.item2": "4 أنشطة يومية",
      "packages.card.premium.item3": "منطقة لعب عشبية خاصة",
      "packages.card.premium.item4": "تحديثات صور يومية",
      "packages.card.premium.item5": "مكافآت خاصة",
      "packages.card.classic.title": "الباقة الكلاسيكية",
      "packages.card.classic.item1": "3 تمشيات يومياً",
      "packages.card.classic.item2": "منطقة لعب داخلية",
      "packages.card.classic.item3": "منطقة استراحة مريحة",
      "packages.card.classic.item4": "جلسة عناية",
      "packages.card.classic.item5": "رعاية يومية",
      "packages.card.day.title": "باقة الرعاية اليومية",
      "packages.card.day.item1": "تمشيتان يومياً",
      "packages.card.day.item2": "منطقة لعب خارجية",
      "packages.card.day.item3": "مسار عوائق",
      "packages.card.day.item4": "منطقة حفر بالرمل",
      "packages.card.day.item5": "أنشطة جماعية ممتعة",
      "packages.book": "احجز الآن",
      "booking.eyebrow": "الحجز",
      "booking.title": "احجز إقامة",
      "booking.lead": "أرسل بياناتك وسنؤكد الحجز بأسرع وقت ممكن.",
      "booking.form.title": "نموذج الحجز",
      "booking.owner_name.label": "اسم صاحب الكلب",
      "booking.owner_name.placeholder": "اسمك",
      "booking.owner_phone.label": "رقم الهاتف",
      "booking.owner_phone.placeholder": "رقم الهاتف",
      "booking.owner_email.label": "البريد الإلكتروني",
      "booking.owner_email.placeholder": "بريدك الإلكتروني",
      "booking.package.label": "الباقة",
      "booking.package.placeholder": "اختر باقة",
      "booking.check_in.label": "تاريخ الدخول",
      "booking.check_out.label": "تاريخ الخروج",
      "booking.dog_name.label": "اسم الكلب",
      "booking.dog_name.placeholder": "اسم الكلب",
      "booking.notes.label": "ملاحظات",
      "booking.notes.placeholder": "حساسية، أدوية، احتياجات خاصة...",
      "booking.button": "تأكيد الحجز",
      "booking.status": "تم استلام طلبك وسنتواصل معك قريباً.",
      "booking.info.title": "قبل الحجز",
      "booking.info.item1": "يرجى إحضار طعام كلبك وأي أدوية.",
      "booking.info.item2": "يفضل إحضار لعبة أو بطانية مفضلة لراحته.",
      "booking.info.item3": "للاستفسار، تواصل معنا عبر صفحة التواصل.",
      "gallery.eyebrow": "المعرض",
      "gallery.title": "معرض كلابنا",
      "gallery.lead": "لقطات لإقامات سعيدة ولحظات لعب ورعاية محبة.",
      "gallery.section": "لحظات من فندق الكلاب",
      "gallery.alt1": "صورة كلب",
      "gallery.alt2": "كلب يجري",
      "gallery.alt3": "لقطة قريبة لكلب",
      "gallery.alt4": "كلب سعيد",
      "gallery.alt5": "كلب يخرج لسانه",
      "gallery.alt6": "كلب ينظر للأعلى",
      "blog.eyebrow": "المدونة",
      "blog.title": "مدونة العناية بالكلاب",
      "blog.lead": "أدلة ونصائح للحفاظ على صحة كلبك ونشاطه وسعادته.",
      "blog.section": "أحدث المقالات",
      "blog.post1.title": "كيف تحافظ على صحة كلبك",
      "blog.post1.body":
        "الحفاظ على صحة كلبك يتطلب تغذية سليمة وتمارين يومية وفحوصات بيطرية منتظمة والكثير من الحب. الكلاب النشطة التي تتلقى الرعاية المناسبة تعيش عادةً حياة أطول وأسعد.",
      "blog.post2.title": "لماذا تحتاج الكلاب إلى تمشية يومية",
      "blog.post2.body":
        "التمشية اليومية مهمة للصحة الجسدية والنفسية. تساعد المشيّات الكلاب على تفريغ الطاقة واستكشاف بيئات جديدة وتقليل التوتر أو الملل.",
      "blog.post3.title": "نصائح لتجميل كلبك",
      "blog.post3.body":
        "العناية المنتظمة تحافظ على نظافة فراء كلبك وصحته. تمشيط الفراء وقص الأظافر واستحمام كلبك يساعد على منع مشاكل الجلد ويبقيه مرتاحاً.",
      "tips.eyebrow": "نصائح",
      "tips.title": "نصائح العناية بالكلاب",
      "tips.lead": "عادات بسيطة تساعد كلبك على الشعور بالأمان والصحة والسعادة يومياً.",
      "tips.section": "نصائح أساسية لكلبك",
      "tips.card.diet.title": "نظام غذائي صحي",
      "tips.card.diet.body":
        "قدّم لكلبك وجبات متوازنة وتجنب الأطعمة البشرية الضارة.",
      "tips.card.exercise.title": "تمارين يومية",
      "tips.card.exercise.body":
        "اصطحب كلبك للمشي واللعب بانتظام ليبقى نشيطاً.",
      "tips.card.groom.title": "العناية والتجميل",
      "tips.card.groom.body":
        "نظّف وفرّش كلبك بانتظام للحفاظ على فراء صحي.",
      "tips.card.vet.title": "زيارات بيطرية منتظمة",
      "tips.card.vet.body":
        "حدّد مواعيد فحوصات دورية للوقاية وتحديث اللقاحات.",
      "tips.card.water.title": "ترطيب كافٍ",
      "tips.card.water.body":
        "وفّر ماءً عذباً دائماً خاصة في الأيام الحارة.",
      "contact.eyebrow": "تواصل",
      "contact.title": "تواصل معنا",
      "contact.lead":
        "نحن جاهزون للإجابة عن أسئلتك ومساعدتك في تنظيم إقامة كلبك.",
      "contact.form.title": "أرسل لنا رسالة",
      "contact.placeholder.name": "اسمك",
      "contact.placeholder.email": "بريدك الإلكتروني",
      "contact.placeholder.message": "رسالتك",
      "contact.button": "إرسال الرسالة",
      "contact.info.title": "معلومات التواصل",
      "contact.info.phone": "الهاتف: +962 79 000 0000",
      "contact.info.email": "البريد الإلكتروني: info@lovinghomes.com",
      "contact.info.location": "الموقع: عمان، الأردن",
      "faq.eyebrow": "الأسئلة الشائعة",
      "faq.title": "الأسئلة الشائعة",
      "faq.lead":
        "إجابات واضحة لأكثر الأسئلة شيوعاً حول فندق الكلاب.",
      "faq.section": "إجابات لأسئلتكم",
      "faq.q1": "ماذا يجب أن أحضر لكلبي؟",
      "faq.a1":
        "أحضر طعام كلبك وأي أدوية وألعاب أو بطانية مفضلة للراحة.",
      "faq.q2": "هل يتم الإشراف على الكلاب طوال اليوم؟",
      "faq.a2":
        "نعم. يراقب فريقنا الكلاب طوال اليوم بما في ذلك اللعب والراحة ووقت الوجبات.",
      "faq.q3": "هل يمكن لكلبي الحصول على مساحة خاصة؟",
      "faq.a3":
        "نوفر مناطق خاصة مريحة للكلاب التي تحتاج إلى وقت هادئ أو راحة إضافية.",
      "faq.q4": "كيف تتعاملون مع الأنظمة الغذائية الخاصة؟",
      "faq.a4":
        "نلتزم بتعليمات التغذية الخاصة بك ويمكننا تلبية الأنظمة الغذائية الخاصة.",
      "faq.q5": "ما هي أوقات تسجيل الدخول؟",
      "faq.a5":
        "يتوفر تسجيل الدخول من 8:00 صباحاً إلى 7:00 مساءً. تواصل معنا للترتيبات الخاصة.",
      "faq.q6": "هل تقدمون تحديثات بالصور؟",
      "faq.a6":
        "نعم. يمكننا إرسال تحديثات صور يومية لتطمئن على كلبك."
    }
  };

  const ZOOM_MIN = 0.85;
  const ZOOM_MAX = 1.25;
  const ZOOM_STEP = 0.05;
  let currentZoom = 1;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const lookup = (lang, key) =>
    translations[lang]?.[key] ?? translations.en[key] ?? "";

  const applyLanguage = (lang) => {
    const resolvedLang = lang === "ar" ? "ar" : "en";
    root.lang = resolvedLang;
    root.dir = resolvedLang === "ar" ? "rtl" : "ltr";
    body.classList.toggle("is-rtl", resolvedLang === "ar");

    i18nTextNodes.forEach((el) => {
      const value = lookup(resolvedLang, el.dataset.i18n);
      if (value) {
        el.textContent = value;
      }
    });

    i18nPlaceholders.forEach((el) => {
      const value = lookup(resolvedLang, el.dataset.i18nPlaceholder);
      if (value) {
        el.setAttribute("placeholder", value);
      }
    });

    i18nAria.forEach((el) => {
      const value = lookup(resolvedLang, el.dataset.i18nAriaLabel);
      if (value) {
        el.setAttribute("aria-label", value);
      }
    });

    i18nAlt.forEach((el) => {
      const value = lookup(resolvedLang, el.dataset.i18nAlt);
      if (value) {
        el.setAttribute("alt", value);
      }
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === resolvedLang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    localStorage.setItem("lang", resolvedLang);
  };

  const setZoom = (value) => {
    currentZoom = clamp(Math.round(value * 100) / 100, ZOOM_MIN, ZOOM_MAX);
    root.style.setProperty("--zoom", currentZoom);
    if (zoomLabel) {
      zoomLabel.textContent = `${Math.round(currentZoom * 100)}%`;
    }
    localStorage.setItem("zoom", currentZoom.toString());
  };

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    themeButtons.forEach((button) => {
      const isActive = button.dataset.theme === theme;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  const storedZoom = parseFloat(localStorage.getItem("zoom"));
  if (!Number.isNaN(storedZoom)) {
    setZoom(storedZoom);
  } else {
    setZoom(1);
  }

  const storedTheme = localStorage.getItem("theme") || "night";
  setTheme(storedTheme);

  const storedLang = localStorage.getItem("lang") || "en";
  applyLanguage(storedLang);

  if (zoomIn) {
    zoomIn.addEventListener("click", () => setZoom(currentZoom + ZOOM_STEP));
  }

  if (zoomOut) {
    zoomOut.addEventListener("click", () => setZoom(currentZoom - ZOOM_STEP));
  }

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => setTheme(button.dataset.theme));
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    const packageSelect = document.getElementById("packageSelect");
    const bookingStatus = document.getElementById("bookingStatus");
    const params = new URLSearchParams(window.location.search);
    const packageParam = params.get("package");

    if (packageSelect && packageParam) {
      packageSelect.value = packageParam;
    }

    bookingForm.addEventListener("submit", (event) => {
      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        event.preventDefault();
        return;
      }

      event.preventDefault();
      if (bookingStatus) {
        bookingStatus.textContent = lookup(root.lang || "en", "booking.status");
      }

      bookingForm.reset();
      if (packageSelect && packageParam) {
        packageSelect.value = packageParam;
      }
    });
  }
})();
