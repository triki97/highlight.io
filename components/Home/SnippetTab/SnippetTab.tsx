import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineDown } from 'react-icons/ai';
import DarkPlaceholder from '../../../public/images/dark.png';
import { SecondaryButton } from '../../common/Buttons/SecondaryButton';
import { Section } from '../../common/Section/Section';
import { Typography } from '../../common/Typography/Typography';
import ReactImage from '../../../public/images/language/ReactIcon';
import htmlImage from '../../../public/images/language/htmlIcon';
import VueImage from '../../../public/images/language/VueIcon';
import NodeImage from '../../../public/images/language/NodeIcon';
import NextjsImage from '../../../public/images/language/NextjsIcon';
import GoImage from '../../../public/images/language/GoIcon';

import styles from '../../Home/Home.module.scss';
import { CodeSnippet } from '../CodeSnippet/CodeSnippet';

export interface SnippetTabObject {
  image: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  key: string;
  content: JSX.Element;
  beta?: boolean;
}

const SetupDescription = (
  <div className={classNames(styles.sectionText, styles.codeSection)}>
    <div className={styles.sectionSubtitle}>
      <Typography type="outline">effortless setup</Typography>
    </div>
    <h2>
      Start using Highlight{' '}
      <span className={styles.highlightedText}>within minutes</span>
    </h2>
    <Typography type="copy2">
      {`Installing Highlight is a matter of selecting your frontend framework and adding three lines of code to your app. Highlight is built to be framework agnostic, so regardless of your stack, we have a solution that'll work for your team. You'll be off to the races in a matter of minutes!`}
    </Typography>
    <div className={styles.buttonContainer}>
      <SecondaryButton href="https://docs.highlight.run/getting-started">
        Read more about our backend integrations in beta
      </SecondaryButton>
    </div>
  </div>
);

const SNIPPET_TABS = [
  {
    image: ReactImage,
    key: 'react',
    content: (
      <Section noYTopPadding={true}>
        <div className={styles.sectionImageLeft}>
          <CodeSnippet
            HeaderImage={ReactImage}
            canCopy={true}
            language="javascript"
            content={`import React from 'react';   
import App from './App';
import { H } from 'highlight.run';
import { ErrorBoundary } from '@highlight-run/react';

H.init('1jdkoe52');

ReactDOM.render(
  <ErrorBoundary showDialog>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);`}
          />
        </div>
        {SetupDescription}
      </Section>
    ),
  },
  {
    image: VueImage,
    key: 'vue',
    content: (
      <Section noYTopPadding={true}>
        <div className={styles.sectionImageLeft}>
          <CodeSnippet
            HeaderImage={VueImage}
            canCopy={true}
            language="javascript"
            content={`import { createApp } from 'vue';       
import App from './App.vue';
import { H } from 'highlight.run';

H.init('1jdkoe52', {
  environment: 'production',
  enableStrictPrivacy: false,
});

createApp(App).mount('#app');`}
          />
        </div>
        {SetupDescription}
      </Section>
    ),
  },
  {
    image: NextjsImage,
    key: 'nextjs',
    content: (
      <Section noYTopPadding={true}>
        <div className={styles.sectionImageLeft}>
          <CodeSnippet
            HeaderImage={NextjsImage}
            canCopy={true}
            language="javascript"
            content={`import { H } from 'highlight.run';

H.init('1jdkoe52');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp`}
          />
        </div>
        {SetupDescription}
      </Section>
    ),
  },
  {
    image: htmlImage,
    key: 'html',
    content: (
      <Section noYTopPadding={true}>
        <div className={styles.sectionImageLeft}>
          <div className={styles.imageInner}>
            <Image src={DarkPlaceholder} alt="" />
          </div>
        </div>
        {SetupDescription}
      </Section>
    ),
  },
  {
    image: GoImage,
    key: 'go',
    beta: true,
    content: (
      <Section noYTopPadding={true}>
        <div className={styles.sectionImageLeft}>
          <CodeSnippet
            HeaderImage={GoImage}
            canCopy={true}
            language="javascript"
            content={`import (
  "github.com/highlight-run/highlight-go"
  highlightChi "github.com/highlight-run/highlight-go/middleware/chi"
)

func main() {
  //...
  highlight.Start()
  defer highlight.Stop()
  //...
  r := chi.NewRouter()
  r.Use(highlightChi.Middleware)
}`}
          />
        </div>
        {SetupDescription}
      </Section>
    ),
  },
  {
    image: NodeImage,
    key: 'node',
    beta: true,
    content: (
      <Section noYTopPadding={true}>
        <div className={styles.sectionImageLeft}>
          <CodeSnippet
            HeaderImage={NodeImage}
            canCopy={true}
            language="javascript"
            content={`import { Highlight } from "@highlight-run/node";

const app = express();

const highlightOptions = {}; 
const highlightHandler = Highlight.Handlers.errorHandler(highlightOptions);

// This should be before any other error middleware and after all controllers
app.use(highlightHandler);`}
          />
        </div>
        {SetupDescription}
      </Section>
    ),
  },
];

export const SnippetTab = () => {
  const tabs = SNIPPET_TABS;
  const [currentTabKey, setCurrentTabKey] = useState(tabs[0]?.key);
  const [currentTabElement, setCurrentTabElement] = useState(tabs[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setCurrentTabElement(
      tabs.find((tab) => tab.key === currentTabKey) || tabs[0]
    );
  }, [currentTabKey, setCurrentTabElement, tabs]);

  return (
    <div>
      <div
        className={classNames(styles.snippetTabs, styles.secondaryBackground)}
      >
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={classNames(styles.snippetTab, {
              [styles.tabSelected]: tab.key === currentTabKey,
            })}
            onClick={() => setCurrentTabKey(tab.key)}
          >
            {tab.beta && (
              <div className={styles.snippetBeta}>
                <Typography type="outline">in beta</Typography>
              </div>
            )}
            <tab.image
              color={tab.key === currentTabKey ? '#EBFF5E' : '#72E4FC'}
            />
          </div>
        ))}
      </div>
      <Section noYBottomPadding={true}>
        <div className={styles.snippetDropdownContainer}>
          <div
            className={styles.snippetDropdown}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className={styles.snippetDropdownValue}>
              <currentTabElement.image color={'#72E4FC'} />
            </div>
            <AiOutlineDown />
          </div>
          {showDropdown && (
            <div className={styles.snippetDropdownList}>
              {tabs.map((tab) => (
                <div
                  key={tab.key}
                  onClick={() => {
                    setShowDropdown(false);
                    setCurrentTabKey(tab.key);
                  }}
                >
                  <tab.image color={'#72E4FC'} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
      <div className={styles.snippetContent}>
        {tabs.map((tab) =>
          tab.key === currentTabKey ? (
            <div key={tab.key}>{tab.content}</div>
          ) : (
            <div key={tab.key}></div>
          )
        )}
      </div>
    </div>
  );
};
