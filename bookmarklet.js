javascript:(function(){
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    
    // Try to parse company and role from page title
    // Most job sites format like "Software Engineer - Company Name" or "Company Name - Role"
    let company = prompt("Company name:", pageTitle.split(/[-|]/)[0].trim());
    let role = prompt("Role:", pageTitle.split(/[-|]/)[1]?.trim() || "");
    
    if (!company || !role) return;
    
    const status = prompt("Status (applied/oa/interview/offer/rejected):", "applied");
    if (!status) return;
    
    const application = {
        company: company,
        role: role,
        status: status.toLowerCase(),
        date: new Date().toLocaleDateString(),
        url: pageUrl
    };
    
    // Save to localStorage
    let applications = JSON.parse(localStorage.getItem('applications') || '[]');
    applications.push(application);
    localStorage.setItem('applications', JSON.stringify(applications));
    
    alert(`✅ Logged: ${company} - ${role}`);
})();