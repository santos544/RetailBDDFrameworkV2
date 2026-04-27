// Export cucumber configuration
module.exports = {

    default: {

        // Allow TypeScript execution without compiling manually
        requireModule: [

            'ts-node/register'
        ],

        // Load all step-definition files
        require: [

            'step-definitions/*.ts'
        ],

        // Test result output formats
        format: [

            // Console progress dots
            'progress',

            // JSON output for HTML report generation
            'json:reports/cucumber-report.json'
        ],

        // Run scenarios in parallel threads
        // Speeds up execution
        parallel: 3,

        // Retry failed scenarios up to 2 times
        retry: 2
    }
}