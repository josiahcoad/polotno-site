import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} Pricing`}
      description="Polotno - Canvas Editor framework for JavaScript"
    >
      <main>
        <h2 id="price">Price</h2>
        {/* TODO: move styles from global to scope */}
        <div>
          <div className="container" style={{ maxWidth: '100%' }}>
            <div className="panel pricing-table">
              <div className="pricing-plan">
                <h2 className="pricing-header">Non-commercial</h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">
                    For non-commercial or development usage only
                  </li>
                  <li className="pricing-features-item">
                    Have a small backlink to polotno website
                  </li>
                  <li className="pricing-features-item">
                    All core polotno features included
                  </li>
                  <li className="pricing-features-item">
                    Basic community
                    <br /> support
                  </li>
                  <li className="pricing-features-item">
                    No "Remove Image Background" support
                  </li>
                  <li className="pricing-features-item">
                    No{' '}
                    <a href="/docs/cloud-render" target="_blank">
                      Cloud Render API
                    </a>{' '}
                    support
                  </li>
                </ul>
                <p className="pricing-price">Free</p>
                <a
                  href={useBaseUrl('docs/overview')}
                  className="pricing-button"
                  onClick={() => {
                    window.plausible('get-started-from-plan');
                  }}
                >
                  Get started
                </a>
              </div>

              <div className="pricing-plan">
                <h2 className="pricing-header">Small team</h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">
                    Commercial and non-commercial
                  </li>
                  <li className="pricing-features-item">
                    One domain, up to 300 daily users
                  </li>
                  <li className="pricing-features-item">
                    No watermarks and backlinks
                  </li>
                  <li className="pricing-features-item">
                    Email
                    <br /> support
                  </li>
                  <li className="pricing-features-item">
                    No "Remove Image Background" support
                  </li>
                  <li className="pricing-features-item">
                    No{' '}
                    <a href="/docs/cloud-render" target="_blank">
                      Cloud Render API
                    </a>{' '}
                    support
                  </li>
                </ul>
                <p className="pricing-price">187 USD / month</p>
                <a
                  href="https://buy.paddle.com/product/652979"
                  className="pricing-button"
                  target="_blank"
                  onClick={() => {
                    window.plausible('small-plan-buy');
                  }}
                >
                  Buy
                </a>
              </div>

              <div className="pricing-plan">
                <h2 className="pricing-header">Enterprise</h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">
                    Commercial and non-commercial usage
                  </li>
                  <li className="pricing-features-item">
                    Unlimited domains and daily users
                  </li>
                  <li className="pricing-features-item">
                    No watermarks and backlinks
                  </li>
                  <li className="pricing-features-item">
                    High priority features request and support
                  </li>
                  <li className="pricing-features-item">
                    500 Remove Background API calls per month
                  </li>
                  <li className="pricing-features-item">
                    3000{' '}
                    <a href="/docs/cloud-render" target="_blank">
                      Cloud Rendering API
                    </a>{' '}
                    calls per month
                  </li>
                </ul>
                <p className="pricing-price">385 USD / month</p>
                <a
                  href="https://buy.paddle.com/product/652978"
                  className="pricing-button is-featured"
                  target="_blank"
                  onClick={() => {
                    window.plausible('large-plan-buy');
                  }}
                >
                  Buy
                </a>
              </div>

              <div className="pricing-plan">
                <h2 className="pricing-header">Custom solution</h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">
                    Additional features on top of public API
                  </li>
                  <li className="pricing-features-item">
                    Full access to the <strong>customization</strong> source
                    code
                  </li>
                  <li className="pricing-features-item">
                    Contracting work with Polotno developers
                  </li>
                  <li className="pricing-features-item">
                    Help with integration
                  </li>
                  <li className="pricing-features-item">
                    1 year bug-free <br />
                    guarantee
                  </li>
                  <li className="pricing-features-item">
                    License plan not included
                  </li>
                </ul>
                <p className="pricing-price">(one time) From $10 000</p>
                <a
                  href="mailto:anton@polotno.dev?subject=We%20are%20interested%20in%20Polotno%20%22Custom%20solution%22%20plan.&body=We%20are%20%5Bsomething%20about%20you%5D.%0D%0A%0D%0AAnd%20we%20are%20interested%20in%20the%20Polotno%20project."
                  className="pricing-button"
                  target="_blank"
                  onClick={() => {
                    window.plausible('custom-solution-request');
                  }}
                >
                  Contact
                </a>
              </div>

              <div className="pricing-plan">
                <h2 className="pricing-header">Ultimate source</h2>
                <ul className="pricing-features">
                  <li className="pricing-features-item">
                    <strong>
                      Full access to source code of Polotno editor
                    </strong>
                  </li>

                  <li className="pricing-features-item">
                    Consulting about all Polotno internals
                  </li>
                  <li className="pricing-features-item">
                    High-priority requests for any bugs fixes
                  </li>
                  <li className="pricing-features-item">
                    High-priority requests for code refactoring
                  </li>
                  <li className="pricing-features-item">
                    Long term access to updates and new versions with yearly
                    subscription
                  </li>
                </ul>
                <p className="pricing-price" style={{ marginTop: '93px' }}>
                  25 000 USD first purchase
                  <br /> 5 000 USD / year
                </p>
                <a
                  href="mailto:anton@polotno.dev?subject=We%20are%20interested%20in%20Polotno%20%22Ultimate%20source%20solution%22%20plan.&body=Please%20describe%20your%20situation%20and%20requirements."
                  className="pricing-button"
                  target="_blank"
                  onClick={() => {
                    window.plausible('custom-solution-request');
                  }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <section
          className="container"
          style={{
            textAlign: 'center',
            paddingBottom: '50px',
            paddingTop: '50px',
            fontSize: '1.5rem',
          }}
        >
          These plans don't fit your needs?{' '}
          <a
            href="mailto:sales@polotno.dev?subject=We%20need%20a%20different%20Polotno%20plan.&body=Describe%20your%20needs."
            target="_blank"
          >
            Tell us more
          </a>
        </section>
      </main>
      <main>
        <section>
          <div className="container">
            <h2>Frequently Asked Questions</h2>

            <h3>When do I need to use "Custom Solution"?</h3>
            <p>
              Polotno framework is a tool for developers. In order to setup it
              and make any customization, you need to have your own development
              resources. There is a "Custom Solution" for the case if your
              resources are very limited or you want to boost the development
              time. "From $10 000" price is just a theoretical example. The
              exact price may be very different (usually higher) and discussed
              individually.
            </p>
            <h3>
              Will I have access to the full source code on the paid plan?
            </h3>
            <p>
              Polotno is provided as minified JavaScript npm package. Full
              source code is available only for "Ultimate source" plan users.
            </p>

            <h3>What kind of data is transmitted to your servers?</h3>
            <p>
              Only the bare minimum that is required for core Polotno functions.
              No personal information, cookies or your site data is send to
              Polotno API servers. You can read more in{' '}
              <a href="/privacy">Privacy Policy</a>.
            </p>

            <h3>Will my subscription renew automatically?</h3>
            <p>
              Yes. You will be billed every month/year. You can always cancel
              your subscription in the <a href="/cabinet">cabinet</a>.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
