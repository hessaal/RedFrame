
const services = [
    {
        id: 1,
        name_ar: " الإنتاج الإعلامي",
        name_en: "PRODUCTION",
        icon: "productionIcon",
        info: "خدمات الانتاج المرئي نقدمها في جميع المجالات تحت إشراف طاقم وكوادر متخصصة، وكما يقال خلف لوحة فنية رائعة فنان عظيم، فإن خلف كل فكرة آو فيديو أو موشن جرافيك أو صورة هناك كاتب ومنتج ومصور نعتز في ريد فريم بهم .",
        backgroundImg: "productionBG",
        brif_info: 'تصوير الافلام الوثائقية والاعلانية ، التصوير الفوتوغرافي ، انتاج الموشن جرافيك ، تغطيات'
    },
    {
        id: 2,
        name_ar: "المعارض والمؤتمرات",
        name_en: "EXHIBITIONS & EVENTS",
        icon: "eventIcon",
        info: "نقوم بتجهيز وتنظيم جميع الفعاليات من مؤتمرات ومعارض وفعاليات مع أحدث تجهيزات وتقنيات الصوت والاضاءة",
        backgroundImg: "eventsBG",
        brif_info: 'تنظيم الفعاليات والمؤتمرات وتجهيز كافة الاحتياجات التقنية والبشرية'
    },
    {
        id: 3,
        name_ar: "التصميم",
        name_en: "DESIGN",
        icon: "designIcon",
        info: "يُعد التأثير البصري لتصميم الجرافيك أحد الجوانب المهمة جدًا لنجاح اي شخص أو عمل تجاري أو مؤسسي، لذلك نقوم بخلق هوية شاملة لمنتجك أو خدمتك أو شركتك في أي مجال كانت .",
        backgroundImg: "designBG",
        brif_info: 'تصميم الكتب و التقارير والمجلات وكافة المطبوعات ، التصاميم الدعائية والإعلانية ، تصميم الإنفوجرافيك.'

    },
    {
        id: 4,
        name_ar: "الهويات",
        name_en: "BRANDING",
        icon: "brandingIcon",
        info: "في ريد فريم نقوم بتصميم وتطوير الهويات وفقاً لمعايير عملية حسب مجال عملك ونقوم بتزويدك باستخدمات الشعار والخطوط والألوان لتوحيد مظهر الهوية البصرية لخدماتك",
        backgroundImg: "brandingBG",
        brif_info: 'ابتكار الهوية البصرية واستراتيجيات العلامة التجارية'
    },
    {
        id: 5,
        name_ar: "التسويق والإستشارات ",
        name_en: "MARKTING & CONSULTING",
        icon: "marktingIcon",
        info: "نحرص على إبراز افضل النتائج التسويقية الذكية وتقليل الصرف المالي العالي بمبالغ رمزية ناجحه. متخصصين بالتسويق الإلكتروني والتسويق الرقمي والتسويق بمنصات التواصل الاجتماعي .",
        backgroundImg: "marktingBG",
        brif_info: 'تقديم الدراسات والاستشارات التسويقية وإدارة مواقع التواصل'
    },
    {
        id: 6,
        name_ar: "تطبيقات الجوال والويب ",
        name_en: "MOBILE APPS & WEB",
        icon: "webIcon",
        info: "نستمد قوتنا من قوة فريقنا الذي يمتلك خبرة كبيرة في مجال تصميم المواقع وبرمجة تطبيقات الهواتف، حيث نعمل على توفير أسرع حلول الويب وأكثرها ابتكارًا وتطورًا.",
        backgroundImg: "webBG",
        brif_info: ' تصميم المواقع وتطويرها ، تصميم المتاجر الإلكترونية و تصميم التطبيقات و برمجتها والدعم الفني لها'
    }
];

let choosedServices = [];


export function getServices() {
    return services;
}

export function getService(id) {
    return services.find(s => s.id === id);
}

export function setchoosedServices(id) {
    services.forEach(s => {
        if (s.id === id) {
            choosedServices.push(s);
        }
    });
}

export function getServicesCount() {
    return services.length;
}

export function getSelectedServices() {
    return choosedServices.filter((s, i) => choosedServices.indexOf(s) === i);
}

export function cleanSelected() {
    choosedServices = [];
}

export function removeSelectedService(id) {
    const index = choosedServices.findIndex(s => s.id === id);
    if (index === 0) {
        choosedServices.splice(index, index + 1);
    }
    else {
        choosedServices.splice(index, index);
    }
}



