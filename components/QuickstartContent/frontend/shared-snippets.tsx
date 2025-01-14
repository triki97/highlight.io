import { QuickStartStep } from "../QuickstartContent"

export const packageInstallSnippet: QuickStartStep = {
    title: "Install the npm package & SDK.",
    content: "Install the npm package `highlight.run` in your terminal.",
    code: {
        text: `# with npm 
npm install highlight.run 

# with yarn
yarn add highlight.run`,
        language: "bash",
    }
}

export const sessionReplayFeaturesLink = "/docs/getting-started/client-sdk/replay-configuration/overview"
export const identifyingUsersLink = "/docs/getting-started/client-sdk/replay-configuration/identifying-sessions"
export const backendInstrumentationLink = "/docs/getting-started/overview#For-your-backend"
export const fullstackMappingLink = "/docs/getting-started/frontend-backend-mapping"

export const initializeSnippet: QuickStartStep = {
    title: "Initialize the SDK in your frontend.",
    content: `Grab your project ID from [app.highlight.io/setup](https://app.highlight.io/setup) and insert it in place of \`<YOUR_PROJECT_ID>\`.  
                    To get started, we recommend setting \`tracingOrigins\` and \`networkRecording\` so that highlight.io can pass a header to pair frontend/backend errors . Refer to our docs on [SDK configuration](${sessionReplayFeaturesLink}) and [Fullstack Mapping](${fullstackMappingLink}) to read more about these options.`,
    code: {
        text: `...
import { H } from 'highlight.run';

H.init('<YOUR_PROJECT_ID>', {
    tracingOrigins: true,
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
        urlBlocklist: [
            // insert urls you don't want to record here
        ],
	},
});

... 
// rendering code.

                `,
        language: "js"
    }
}

export const identifySnippet: QuickStartStep = {
    title: "Identify users.",
    content: `Identify users to tie their sessions/errors to their account. We suggest doing this before/after the authentication flow of your web app. \n\n\nThe first argument of \`identify\` will be searchable via the property \`identifier\`, and the second property is searchable by the key of each item in the object. Read more about this in our [identifying users](${identifyingUsersLink}) section.`,
    code: {
        text: `H.identify('jay@highlight.io', {
    id: 'very-secure-id',
    phone: '867-5309',
    bestFriend: 'jenny'
});`,
        language: "js"
    }
};

export const verifySnippet: QuickStartStep = {
    title: "Verify installation",
    content: "Check your [dashboard](https://app.highlight.io/sessions) for a new session. Don't see anything? Send us a message in [our community](https://highlight.io/community) and we can help debug.",
}

export const setupBackendSnippet: QuickStartStep =
{
    title: "Instrument your backend.",
    content: `The next step is instrumenting your backend to tie logs/errors to your frontend sessions. Read more about this in our [backend instrumentation](${backendInstrumentationLink}) section.`,
};