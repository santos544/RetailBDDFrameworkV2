// Import report package
const report =
    require('multiple-cucumber-html-reporter')

// Generate report
report.generate({

    // Location of cucumber json file
    jsonDir: 'reports',

    // Output folder for HTML report
    reportPath: 'reports/html',

    // Report title
    pageTitle:
        'Retail Automation Report',

    // Main heading
    reportName:
        'Retail BDD Framework Results',

    metadata: {

        browser: {

            name:
                'Chrome / Safari / Firefox',

            version:
                'Latest'
        },

        device:
            'iPhone / Android',

        platform: {

            name:
                'Windows',

            version:
                '10/11'
        }
    }
})