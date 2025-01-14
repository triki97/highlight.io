import { QuickStartContent, QuickStartStep } from "../QuickstartContent";
import { identifySnippet, initializeSnippet, packageInstallSnippet, sessionReplayFeaturesLink, setupBackendSnippet, verifySnippet } from "./shared-snippets";

const vueInitSnippet: QuickStartStep = {
    title: "Initialize the SDK in your frontend.",
    content: `Grab your project ID from [app.highlight.io/setup](https://app.highlight.io/setup) and insert it in place of \`<YOUR_PROJECT_ID>\`.  
                    To get started, we recommend setting \`environment\`, \`appVersion\`, and \`networkRecording\`. Refer to our docs on [SDK configuration](${sessionReplayFeaturesLink}) to read more about these options. `,
    code: {
        text: `...
import { H } from 'highlight.run';

import { createApp } from 'vue'	
import App from './App.vue'

H.init('<YOUR_PROJECT_ID>', {
    environment: 'production',
    appVersion: 'commit:abcdefg12345',
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
        urlBlocklist: [
            // insert urls you don't want to record here
        ],
	},
});

... 
createApp(App).mount('#app')	

                `,
        language: "js"
    }
}

export const VueContent: QuickStartContent = {
    subtitle: "Learn how to set up highlight.io with your React application.",
    entries: [
        packageInstallSnippet,
        vueInitSnippet,
        identifySnippet,
        verifySnippet,
        setupBackendSnippet,
    ]
}
