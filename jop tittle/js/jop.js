document.addEventListener('DOMContentLoaded', () => {
    // عناصر النموذج
    const publishButton = document.querySelector('.publish-btn');
    const saveButton = document.querySelector('.save-btn');
    const cancelButton = document.querySelector('.cancel-btn');
    const browseBtn = document.querySelector('.browse-btn');

    // مثال للتحقق من المدخلات عند الضغط على زر "حفظ"
    saveButton.addEventListener('click', (event) => {
        event.preventDefault();

        const companyName = document.getElementById('company-name').value;
        const position = document.getElementById('position').value;
        const salaryFrom = document.getElementById('salary-from').value;
        const salaryTo = document.getElementById('salary-to').value;

        if (!companyName || !position || !salaryFrom || !salaryTo) {
            alert('يرجى تعبئة جميع الحقول المطلوبة.');
            return;
        }

        if (parseFloat(salaryFrom) > parseFloat(salaryTo)) {
            alert('الرجاء التأكد من أن الحد الأدنى للراتب أقل من الحد الأعلى.');
            return;
        }

        alert('تم حفظ البيانات بنجاح!');
        // هنا يمكنك إضافة كود لإرسال البيانات إلى السيرفر باستخدام AJAX أو Fetch API
    });

    // مثال للتأكيد عند الضغط على زر "إلغاء"
    cancelButton.addEventListener('click', (event) => {
        event.preventDefault();

        const confirmCancel = confirm('هل أنت متأكد أنك تريد إلغاء التعديلات؟');
        if (confirmCancel) {
            // إعادة تعيين النموذج
            document.querySelector('.form-container form').reset();
        }
    });

    // مثال للتفاعل عند الضغط على زر "نشر"
    publishButton.addEventListener('click', () => {
        alert('تم نشر الوظيفة بنجاح!');
        // هنا يمكنك إضافة كود لمعالجة نشر الوظيفة
    });
    browseBtn.addEventListener('click', ()=>{
        
    })
});
