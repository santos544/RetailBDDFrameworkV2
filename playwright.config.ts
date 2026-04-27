// Export Playwright settings
export default {

    use: {

        // Browser visible during training
        headless: false,

        // Screenshot only when failure happens
        screenshot: 'only-on-failure',

        // Video on failure
        video: 'retain-on-failure'
    }
}