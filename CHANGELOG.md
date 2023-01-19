

## [2.0.0](https://github.com/datacamp/waffles/compare/v1.19.0...v2.0.0) (2023-01-19)


### ⚠ BREAKING CHANGES

* **button:** change default `variant` to `secondary`
* **icon:** rename `*Inverted` icons to `*Solid`
* **badge:** rename `greySubtle` variant to `greyLight`
* **avatar:** rename `greySubtle` variant to `greyLight`
* **tokens:** update some greys, `blueDarkText` and `navySubtleTextOnLight` color tokens

### Core Changes

* **avatar:** rename `greySubtle` variant to `greyLight` ([7f2755e](https://github.com/datacamp/waffles/commit/7f2755e3904877af80a8b91c8389a1d10822e536))
* **badge:** rename `greySubtle` variant to `greyLight` ([42b19f3](https://github.com/datacamp/waffles/commit/42b19f3a5612bdf72149ad84bee0d74267c7ecb7))
* **button:** change default `variant` to `secondary` ([54e319e](https://github.com/datacamp/waffles/commit/54e319ea6f5b32651b81a222010ba88a14a606dd))
* **code:** change background-color to `greyLight` ([7c4ce97](https://github.com/datacamp/waffles/commit/7c4ce970ac4162a6521e7283dff81bca1f4aca67))
* **icon:** rename `*Inverted` icons to `*Solid` ([e9c8f77](https://github.com/datacamp/waffles/commit/e9c8f77454dd0522fccb157d4be09cd063766e72))
* **tokens:** add new utility transparent tokens ([42ada68](https://github.com/datacamp/waffles/commit/42ada68dd7608c4818be9962a59dfff875ee5022))
* **tokens:** update some greys, `blueDarkText` and `navySubtleTextOnLight` color tokens ([b67d3b2](https://github.com/datacamp/waffles/commit/b67d3b264147ce5a0da17b16c5530e1304e914ff))


### Documentation Changes

* add guidance on border and hover colors ([37db460](https://github.com/datacamp/waffles/commit/37db46096fb6a4f613ecb70182c854a2a5d43e20))
* **avatar:** update to reflect variant usage ([4216b46](https://github.com/datacamp/waffles/commit/4216b46662ab9e0ab024dc0b2984bd78d7301092))
* **badge:** update to reflect variant usage ([209fcf5](https://github.com/datacamp/waffles/commit/209fcf57a8534acff3ffffda02ac808b1e07ee70))
* **icon:** group solid icons ([06195a0](https://github.com/datacamp/waffles/commit/06195a04cb0f11acedfb68c96b53604e3ed0840c))
* **icon:** update usage guidance ([31d4cfc](https://github.com/datacamp/waffles/commit/31d4cfcd3121400faf87a03a11b49c1ce63fa038))
* **tokens:** update guidelines on background colors ([cfd9658](https://github.com/datacamp/waffles/commit/cfd965842849a10476789c351139c3895b3b2745))
* update button variants for examples ([447ed4f](https://github.com/datacamp/waffles/commit/447ed4f272692982b7bc00f967f12237e109a933))
* update icons in best practices cards ([ec23e31](https://github.com/datacamp/waffles/commit/ec23e3181e9c708f46c1f46ae40b2fc9b417bca5))

## [1.19.0](https://github.com/datacamp/waffles/compare/v1.17.1...v1.19.0) (2023-01-12)


### Bug Fixes

* **asset:** use proper Docker logomark ([fd0e4af](https://github.com/datacamp/waffles/commit/fd0e4af2ff868a29c65e681f2311b0d0ea340edd))
* **ci:** bump npm package version ([e9fbfb8](https://github.com/datacamp/waffles/commit/e9fbfb8e13479b285f9aed3ddd30c7c938293441))
* **EmptyState,Notification:** title prop type ([d454887](https://github.com/datacamp/waffles/commit/d4548877dfb19ab3afb09462df6669a36b1b4de6))
* **notification:** fix alignment for `mode="banner"` ([af06479](https://github.com/datacamp/waffles/commit/af06479e9d9dde9b0eef6ae58cb264077bb61a6b))
* **pagination:** fix incorrect `inverted` hover color ([3d4b537](https://github.com/datacamp/waffles/commit/3d4b537c58cf59afa9834040a4e369c7a9f0a50e))
* **setTitleCase:** don’t lowercase the C in DataCamp & similar ([43c54c5](https://github.com/datacamp/waffles/commit/43c54c5d7c975fc756369caf31dd092ab90dd052))
* **setTitleCase:** pr review Christian ([aa9acca](https://github.com/datacamp/waffles/commit/aa9accaac14b8bcf209d2c5ef50ba146ff83c078))


### Core Changes

* **asset:** add new `DockerLogo` and `DockerLogomark` components ([68e0742](https://github.com/datacamp/waffles/commit/68e074206e0315825ffd56e97e71c67c3404ac20))
* **pagination:** add new pagination component ([d0410ae](https://github.com/datacamp/waffles/commit/d0410aea6d18a7872098004a320e9c7b86dfe480))


### Documentation Changes

* **alert-dialog:** add basic usage guidance ([e107beb](https://github.com/datacamp/waffles/commit/e107bebdad0a98ff33b998641fb36a3431989d09))
* **asset:** fix alpa loop assets being duplicated in 'other' section ([8011bf8](https://github.com/datacamp/waffles/commit/8011bf8e64ff8970b924e0548b947d17dfa2525a))
* **card:** add guidelines ([7125b2e](https://github.com/datacamp/waffles/commit/7125b2e9103b03bdb279086d25d8faaaa354c134))
* **chapeau:** add guidelines ([188c2f9](https://github.com/datacamp/waffles/commit/188c2f9cd9b2def3c895ae95fb18ec09b6609046))
* **content-container:** add best practices ([3771bc9](https://github.com/datacamp/waffles/commit/3771bc9ca2ee577856891617da06e889adb4be6e))
* **dialog:** add basic usage guidance ([3891be4](https://github.com/datacamp/waffles/commit/3891be41bb4505060c86b0383ec4b5fa56bd3d0a))
* **display:** add guidelines ([9b56da9](https://github.com/datacamp/waffles/commit/9b56da9594c93815821c563ba5cd044b1ac07315))
* **drawer:** add basic usage guidance ([cfc6d0a](https://github.com/datacamp/waffles/commit/cfc6d0ac4f9040ab3ef1cd5129a629758570076f))
* **error-boundary:** add guidelines ([2470698](https://github.com/datacamp/waffles/commit/2470698877f26e55c49fe0efff6e9bdbbdb0ac5d))
* fix minor typos ([36bab5a](https://github.com/datacamp/waffles/commit/36bab5a157839a8466e2071a8d3c1be4e672f69b))
* **helpers:** add description ([02f37c2](https://github.com/datacamp/waffles/commit/02f37c2a3f53e7bbfc353297884d51896cddaa8c))
* **helpers:** add missing examples ([eb02137](https://github.com/datacamp/waffles/commit/eb02137ccc75069820d4698a4405cc6ca05d99cb))
* **helpers:** update setTitleCase docs ([5ca5520](https://github.com/datacamp/waffles/commit/5ca5520c00863e89064c2e426c5974a6619fb218))
* **icon:** always show icon names ([69106b0](https://github.com/datacamp/waffles/commit/69106b0ad7b2d6f130313a2fb9cc4961fc18d043))
* **link:** add guidelines ([a85f4c0](https://github.com/datacamp/waffles/commit/a85f4c0644a6608e2d7dc24f8745d46faf857d1a))
* **menu:** add guidelines ([e950a97](https://github.com/datacamp/waffles/commit/e950a9703649879e60bb81586f23744000ae269e))
* **notification:** add guidelines ([679c1fa](https://github.com/datacamp/waffles/commit/679c1fafe21c798e8842de95894f2b5b17c2b273))
* **pagination:** add basic documentation for component ([2e3b423](https://github.com/datacamp/waffles/commit/2e3b423d46fd6301cc73d56e7268917b886492a0))
* **pagination:** add examples ([c9d761c](https://github.com/datacamp/waffles/commit/c9d761c0e16fdf3638cefbb2820d0218feafe130))
* **pagination:** small improvements ([45c5316](https://github.com/datacamp/waffles/commit/45c53165d4b3e60a3a0c6bf5607a54d0a8ad817c))
* **portal:** add guidelines ([d68659e](https://github.com/datacamp/waffles/commit/d68659e3366163222d9c9ef55dfb591e96f62b1f))
* rename guidelines to guidance ([9ae3909](https://github.com/datacamp/waffles/commit/9ae390968b5594266437f0d6e4d516bed94d53a3))
* **resizable:** add guidelines ([8a1ad4f](https://github.com/datacamp/waffles/commit/8a1ad4f8725575bdf8d7a5290eade7da55e4e326))
* **roadmap:** update priorities and component list ([c93037e](https://github.com/datacamp/waffles/commit/c93037e1672635c6137a0662ed8420da25d8e059))
* **screen-reader-only:** add guidelines ([df84f29](https://github.com/datacamp/waffles/commit/df84f29a57e175ae6bf5dd03a5757d0986765b73))
* **side-navigation:** add guidelines ([da0a1d6](https://github.com/datacamp/waffles/commit/da0a1d69ab7ac955153f81a833896a3cdae92109))
* **slider:** add guidelines ([cc158d9](https://github.com/datacamp/waffles/commit/cc158d9b6f16d1f41b6cd19a68f4176abc65eab7))
* **tabs:** add guidelines ([f123e2b](https://github.com/datacamp/waffles/commit/f123e2b270cc57a186fc8dea2d25ed9361d580a3))
* **text:** add guidelines ([24a6741](https://github.com/datacamp/waffles/commit/24a6741643da058b8c93b55fd9d9ec5ab27b9c9c))
* **toast:** add guidelines ([92484af](https://github.com/datacamp/waffles/commit/92484afb5a317a8b6f07608f724c6f2f1d5b87f5))
* update example wrapping and spacing ([d4a7180](https://github.com/datacamp/waffles/commit/d4a718019bc3154fa2f774ad9f8527baa33dfcde))

## [1.17.1](https://github.com/datacamp/waffles/compare/v1.17.0...v1.17.1) (2022-12-28)


### Bug Fixes

* downgrade `floating-ui` dependency ([4e1245e](https://github.com/datacamp/waffles/commit/4e1245e595881cf3d2494075520b5e8bb3837aa5))


### Documentation Changes

* remove adoption page and nav link ([ca63e51](https://github.com/datacamp/waffles/commit/ca63e516153962317cc22337a00f173eab587d98))

## [1.17.0](https://github.com/datacamp/waffles/compare/v1.16.0...v1.17.0) (2022-12-13)


### Bug Fixes

* **link:** update underline animation for Safari ([4b73c44](https://github.com/datacamp/waffles/commit/4b73c449d2de130584edbb3c28b9151ce1feae4c))
* **notification:** fix incorrect inverted upgrade icon color ([d37c10f](https://github.com/datacamp/waffles/commit/d37c10f3a2313c9b142cef20cfd1fb12d4148c61))
* **overlay:** enable lockScroll in floating-ui ([1b9ee7f](https://github.com/datacamp/waffles/commit/1b9ee7faade6e561c923a07a2eb571f421e1cc66))
* **overlay:** fix zindex issue ([d2a3f03](https://github.com/datacamp/waffles/commit/d2a3f035903ac21364cec68fceae866199bcda51))


### Core Changes

* **dialog:** add dynamic icon for decorative header based on variant ([d646597](https://github.com/datacamp/waffles/commit/d646597b53d68ef5ffde3badcc6ad113d3d74f80))
* **dialog:** add new decorative header mode ([e31aaed](https://github.com/datacamp/waffles/commit/e31aaed8c1008f2415cf9329bd0682d5bad2f6e3))
* **dialog:** add polymorphic typing support for Dialog.Button ([bf46da3](https://github.com/datacamp/waffles/commit/bf46da33483452d0eddb6f64ca4e12afcca70316))
* **dialog:** add support for custom icon override ([4d3e457](https://github.com/datacamp/waffles/commit/4d3e457b937bd5fb6b1a722798658912ede50425))
* **empty-state:** increase border opacity ([4fabfb5](https://github.com/datacamp/waffles/commit/4fabfb5cac91305571b4ccda23b7eb63d62d27f6))
* **icon:** add Minimize icon ([c96fb94](https://github.com/datacamp/waffles/commit/c96fb94d3f772a880531861f3fac04bd130fb874))
* **icon:** update Rocket and Expand icons ([716a0b9](https://github.com/datacamp/waffles/commit/716a0b98000f1225db054f9333845822f48602cf))
* **link:** make thickness of underline same for all sizes ([e2e35be](https://github.com/datacamp/waffles/commit/e2e35be1fe677a51e7052ceaa2d992d01457bc6b))


### Documentation Changes

* add content course naming page ([153fca1](https://github.com/datacamp/waffles/commit/153fca105554bae73674ff350a26654268fdda74))
* add content grammar page ([f1154c0](https://github.com/datacamp/waffles/commit/f1154c03be761dfc0ef7c57892d4f06996e18c35))
* add Content section to side navigation ([438636a](https://github.com/datacamp/waffles/commit/438636a48fec26a1a907fe7881a9e9df86b0b983))
* add content terminology page ([3bddaf8](https://github.com/datacamp/waffles/commit/3bddaf86bf3ede50d8b9eb71a3ebb3e027c3cb95))
* add version parsing utilities to helpers ([96f4ff0](https://github.com/datacamp/waffles/commit/96f4ff0a8667aaa3ddab9b3e685e3162aaaf79a5))
* **adoption:** add dependencies component ([ecb93fb](https://github.com/datacamp/waffles/commit/ecb93fb8cd91ffabc8ef9d673217f72a5e4af2c9))
* **adoption:** add project overview component ([a97a3e5](https://github.com/datacamp/waffles/commit/a97a3e5939891e350cacdef3c5234150a76b1bb8))
* **adoption:** add project version badge component ([7119247](https://github.com/datacamp/waffles/commit/711924736c45d561f3876bd01330eb1827b6107b))
* **adoption:** add timestamp to report ([dcc9315](https://github.com/datacamp/waffles/commit/dcc93151bcf2c053665b78116719937520241b93))
* **adoption:** create global components stats component ([d09319e](https://github.com/datacamp/waffles/commit/d09319e76aeb27dedb5e5d72d2e8c41fd7835449))
* **adoption:** implement components stats components ([77f568f](https://github.com/datacamp/waffles/commit/77f568f38964bb71cecb4429bea8a2f39f1f21c5))
* **adoption:** improve components stats layout ([0278fba](https://github.com/datacamp/waffles/commit/0278fba9b96680bef8ce3d96aeeb28eee4bff92e))
* **adoption:** improve layout of chart and stats ([2dc1fbd](https://github.com/datacamp/waffles/commit/2dc1fbd0a6ca7ab52aae491278497e746dc76d44))
* **adoption:** refer to New Waffles as just Waffles ([4bafb41](https://github.com/datacamp/waffles/commit/4bafb414f308a080292c2d9794ee71affda2bb25))
* **adoption:** show global version breakdown per project ([f64cd87](https://github.com/datacamp/waffles/commit/f64cd8797d83e1df7ba99df532c68c7833c93892))
* **adoption:** show project status badges next to it's name ([0eb3d34](https://github.com/datacamp/waffles/commit/0eb3d3424ac4e860e2d5499757b5e3cbf0a90067))
* **alert-dialog:** remove fullWidth prop from playground example ([f485624](https://github.com/datacamp/waffles/commit/f485624853d1810af06a92c193e943d4a03f4626))
* create basic script to track Waffles dependencies ([f290830](https://github.com/datacamp/waffles/commit/f2908302339da5c5b59c56324d1282924215eb45))
* **dialog:** add center aligned example ([616cd08](https://github.com/datacamp/waffles/commit/616cd08d63f825a5146ec147b8d220b365d0da35))
* **dialog:** add decorative header examples ([00281df](https://github.com/datacamp/waffles/commit/00281dfde6a143262aa34f5f6d67092a1fb47cc5))
* **dialog:** add example with customIconOverride in header ([712a298](https://github.com/datacamp/waffles/commit/712a29811ba32603b7ecfc33a0a97d0bcd2edf91))
* **dialog:** remove lorem ipsum content from examples ([be5780e](https://github.com/datacamp/waffles/commit/be5780ecf627bb74d767e7f6b0db31f1b853ff66))
* **dialog:** update accessibilty docs ([f881550](https://github.com/datacamp/waffles/commit/f881550598aed8229c0afa4a1c162cc765d7fb5a))
* **dialog:** update decorative header variant example ([2262488](https://github.com/datacamp/waffles/commit/22624887c0c1dd04ff4d2e0c473dd9fa903ee62f))
* **drawer:** update form example with `aria-label` ([64e30f6](https://github.com/datacamp/waffles/commit/64e30f63c61134d5484377d65ecf1e2bb13f8bfe))
* **drawer:** update playground example ([7ad253a](https://github.com/datacamp/waffles/commit/7ad253a4ff8410a8b2ac897e09a910f422edc78c))
* **drawer:** update prop tables to reference Dialog ([2a6e9f6](https://github.com/datacamp/waffles/commit/2a6e9f603a80ea333461fa6f7f67b5b8a3788de2))
* explain how adoption is tracked in internal docs ([c6fd5a2](https://github.com/datacamp/waffles/commit/c6fd5a2cc2ad226fdd945ff502bfead9545c0028))
* **notification:** update default examples ([a7b734d](https://github.com/datacamp/waffles/commit/a7b734d362886b302331aac03cc99f09b6ee018c))
* properly report number of components ([4e36536](https://github.com/datacamp/waffles/commit/4e365362e311747c5aaa49b12e9b9107825e8bee))
* remove aria attributes from header dialog subcomponents ([4f0cf67](https://github.com/datacamp/waffles/commit/4f0cf67c9bfc15f54c23da8c57526a9d787483bc))
* simplify adoption tracking script ([3b3a3d0](https://github.com/datacamp/waffles/commit/3b3a3d0c3ef5b337e3845a7980bb45dbc73f42de))
* sort adoption report results ([796ae42](https://github.com/datacamp/waffles/commit/796ae4298a8cac4acea15105569c9e45de60daa7))
* **toast:** update default examples ([1564ff9](https://github.com/datacamp/waffles/commit/1564ff9f38136707ec860328434fa59bbb124ec7))
* track components usage across repos ([ffaf9a2](https://github.com/datacamp/waffles/commit/ffaf9a2aaae98cb22c2c89379f61bf3c52630e26))
* track components usage across repos ([94d4f7b](https://github.com/datacamp/waffles/commit/94d4f7b57c2c40ae444d2eca923dd9c71e77d2ef))
* update dependencies report data structure ([8086e40](https://github.com/datacamp/waffles/commit/8086e405ea620b46e36f2d24d76d0189146ca854))
* update Design Principles page ([32257cd](https://github.com/datacamp/waffles/commit/32257cd1a06d6e8928e0c8b98b1e4a2a5558876f))
* update dialog examples and accessibility remarks ([35caab8](https://github.com/datacamp/waffles/commit/35caab831b9548034741d0c6e7937e5a6f9b860b))
* update project organization internal docs ([d514583](https://github.com/datacamp/waffles/commit/d51458353476799725b6e7c826478bf75f8f5752))
* update side nav ([ef298d3](https://github.com/datacamp/waffles/commit/ef298d3419db8a759e40ae0a81042c40e380168b))

## [1.16.0](https://github.com/datacamp/waffles/compare/v1.15.0...v1.16.0) (2022-11-10)


### Bug Fixes

* **skill-tag:** fix unique key issue with indicators ([86dff75](https://github.com/datacamp/waffles/commit/86dff75247acfeab3db9a3f92ea1cebb466f068a))


### Core Changes

* **asset:** add new alpa icon assets ([ac64ad1](https://github.com/datacamp/waffles/commit/ac64ad10e10564e90dd568dd07e8ddcb8d6d82b4))
* **brand:** add new recruit product logos ([38b5cb0](https://github.com/datacamp/waffles/commit/38b5cb02ff58e39c16205fce0884a8852ea32d68))
* **card:** add inverted variant and HeadstoneItem subcomponent ([9fdcc54](https://github.com/datacamp/waffles/commit/9fdcc5420474bd51fa94e14dbe6ecd41b870bc29))
* **icon:** add datacamp recruit icon ([dc54cff](https://github.com/datacamp/waffles/commit/dc54cff60f8322ff6d4c86c0e64673cb847656e9))
* **icon:** add VersionHistory icon ([e5bb07b](https://github.com/datacamp/waffles/commit/e5bb07bc607c4955cc520cf0899f7fc0e1034aa0))
* **menu:** update tab-out behavior ([00882ac](https://github.com/datacamp/waffles/commit/00882acaca6bda99c25716353ccc8a7ca20e3e86))
* **notification:** add optional close button override ([325cca5](https://github.com/datacamp/waffles/commit/325cca583eb08d67d5f3901cf9540567d44ef069))
* **radio:** allow optional children with required aria-label ([7f83686](https://github.com/datacamp/waffles/commit/7f836864aa7fa57ed5c0fbd75dea1760bc7fd251))
* **skill-tag:** add new `SkillTag` component ([e442ecb](https://github.com/datacamp/waffles/commit/e442ecba4e42a31434b1c9968812b1b106f4c824))
* **switch:** allow optional children with required aria-label ([7e69aea](https://github.com/datacamp/waffles/commit/7e69aeac52be66937a3adc418dc4003c035f04f2))
* **toast:** support individual `disableAutoHide` override ([ba6466a](https://github.com/datacamp/waffles/commit/ba6466ab599ff17cb8cdf1c05f23d74b299b724e))


### Documentation Changes

* add Design Principles page ([3e1ddc0](https://github.com/datacamp/waffles/commit/3e1ddc06e0497aa397af172399ca4481afaa262e))
* add DesignPrinciples component ([d2d17a1](https://github.com/datacamp/waffles/commit/d2d17a166d98ed96aa88157ee5fc06f109143cfd))
* **asset:** add alpa icons grid ([fe22ee2](https://github.com/datacamp/waffles/commit/fe22ee2514272bd4f408b2e7d706803bc337ffc4))
* **brand:** add recruit product logos to docs ([387b629](https://github.com/datacamp/waffles/commit/387b629ef8ba71fc1795a1ab3afa93a8860c6bbd))
* **brand:** separate brand download bundle into individual based on type ([0b013c3](https://github.com/datacamp/waffles/commit/0b013c3cbb658e7f8ba9cfeb5bc0bde91575aef6))
* **card:** add inverted example ([faced4d](https://github.com/datacamp/waffles/commit/faced4de9dee9ad6b7aff5771f2ec2478c32ce13))
* **checkbox:** add no label example ([9b72daa](https://github.com/datacamp/waffles/commit/9b72daa2bc90fa40bdf143ccd3fd4ca99f3e5d0b))
* **menu:** update guidelines ([99436c6](https://github.com/datacamp/waffles/commit/99436c6c8e6e1c34d73c6640b85337dd5d96220a))
* move Design Principles to Foundation section ([7745c02](https://github.com/datacamp/waffles/commit/7745c02c23c347591af42c94d3b53f00413f18de))
* **notification:** add custom close example ([e9ca967](https://github.com/datacamp/waffles/commit/e9ca967e947b6f7f5e933e54cb9543594e3b3816))
* **notification:** update custom close button example ([246b196](https://github.com/datacamp/waffles/commit/246b196e44dfcb767f56b3a71376a595f8755dce))
* **notification:** update docs for close button ([ab5c336](https://github.com/datacamp/waffles/commit/ab5c33624ba7ddbe692f40dca6da9e7aedfa7551))
* **radio:** add no label example ([9d0b392](https://github.com/datacamp/waffles/commit/9d0b392e8cace42e85c045b7897da7127003902a))
* remove wrappers from radio and switch no label examples ([f3d576e](https://github.com/datacamp/waffles/commit/f3d576efb24f4cd475b048cfd17dd4a6243a004a))
* reorder checkbox, radio and switch examples ([b1e6806](https://github.com/datacamp/waffles/commit/b1e6806a813e2fb556d748d3c0e9406a31973a8d))
* **skill-tag:** add examples to docs ([e5f123a](https://github.com/datacamp/waffles/commit/e5f123a26d336eb68d6c6402cf0a32b5cc443893))
* **skill-tag:** add navigation entry and component status ([510c133](https://github.com/datacamp/waffles/commit/510c133b7d735a27cc1e91e1b6479dabd61297bd))
* **skill-tag:** add usage guidance and best practices ([a4e5415](https://github.com/datacamp/waffles/commit/a4e54156a11cf045eb9aa7f8594d8de8d0a94e76))
* **skill-tag:** update usage guidance and best practices ([7e24455](https://github.com/datacamp/waffles/commit/7e24455fbe9559ad3265b3f9d4d3a17a4e68c56d))
* **switch:** add no label example ([46e241b](https://github.com/datacamp/waffles/commit/46e241ba1d0f696b72bbad9333a48972e324b11a))
* **toast:** add individually persistent override example ([c0aa505](https://github.com/datacamp/waffles/commit/c0aa505a34107eeb1a0aaf35423315ad1c516809))
* update StudioFeixenSans font ([ed5bdfe](https://github.com/datacamp/waffles/commit/ed5bdfe156b05f6ccfdf7777fb3c57cd132b45db))

## [1.15.0](https://github.com/datacamp/waffles/compare/v1.14.0...v1.15.0) (2022-10-26)


### Bug Fixes

* **button:** add keys to icons to fix warning ([f3b3813](https://github.com/datacamp/waffles/commit/f3b38138e6465e1d8a795658fe55cebc4de241db))
* **button:** add Loader aria label for `isLoading` Button ([18d5674](https://github.com/datacamp/waffles/commit/18d5674365bc86f727ae811270aab26f55c45482))
* **button:** handle empty string in title case conversion ([b01d14a](https://github.com/datacamp/waffles/commit/b01d14a230f3c87606a2affc9a30981e07b79a7d))
* **loader:** revert loader to use original structure and animation ([12b1bd2](https://github.com/datacamp/waffles/commit/12b1bd2c72013a26a438296acfa1077b9e0279b6))
* **notification:** lower z-index of decor and icon ([9bec09e](https://github.com/datacamp/waffles/commit/9bec09e9586c04bf0a800b505000870435e7e4e7))
* **table:** body background round corners in Firefox ([91bec8e](https://github.com/datacamp/waffles/commit/91bec8ed616c86f2490a4fa4a493c4201145eecc))
* **table:** show focus outline when table is scrolled ([c14b59b](https://github.com/datacamp/waffles/commit/c14b59baee41f4383dd3d497578f3722bb7fcfe2))
* **tabs:** improve behavior of gradient mask ([71e1c61](https://github.com/datacamp/waffles/commit/71e1c614ed9a148629851b4784a7277686aa1e72))
* **tabs:** revert to use old gradient mask ([87384f8](https://github.com/datacamp/waffles/commit/87384f8ae5fdf62b26982980eba87d320a6e7076))


### Core Changes

* **asset:** add Julia logo ([98679c1](https://github.com/datacamp/waffles/commit/98679c12defe9acb3982e660aadcb33341c36703))
* **asset:** add Julia logomark ([4c7fb49](https://github.com/datacamp/waffles/commit/4c7fb4938ffd548f8852e8f7341b49e7770980a8))
* **brand:** add new product logos and logomarks ([c51db38](https://github.com/datacamp/waffles/commit/c51db38ddef90597293ff0992b4eddb76dd508aa))
* **card:** show hover style when element inside is focused ([ca609e3](https://github.com/datacamp/waffles/commit/ca609e36ef78f182279db9e77c07cfbc1d0d88ae))
* **checkbox:** allow checkbox without visible label ([05fac62](https://github.com/datacamp/waffles/commit/05fac62a0c1ca6f758da72a8f13f144a2333d425))
* **checkbox:** allow checkmark only without label ([fdf3018](https://github.com/datacamp/waffles/commit/fdf3018d6ee408301b1392b59980a3e481b020b0))
* **checkbox:** introduce indeterminate state ([e4cc841](https://github.com/datacamp/waffles/commit/e4cc841493d3459e1a51b8cb3a5f467ea43bf73e))
* **hooks:** add useShowScrollHint hook ([433488b](https://github.com/datacamp/waffles/commit/433488b8499884f7bbf0a3132b9e20d1def967b0))
* **icon:** add new product icons ([97f53d1](https://github.com/datacamp/waffles/commit/97f53d11b6531e2a3aa7e6f17018822f4c8f24da))
* **notification:** add new banner `mode` ([6d2bd11](https://github.com/datacamp/waffles/commit/6d2bd11e55f969cfa59f8850b8baaf55ced5536c))
* **table:** add CellCheckbox and HeadCellCheckbox subcomponents ([2c22f83](https://github.com/datacamp/waffles/commit/2c22f8326ebc5b4f99e0e0fdca5c935e052b59c3))
* **table:** add CellMenu subcomponent ([2113f0b](https://github.com/datacamp/waffles/commit/2113f0ba7acedfec8e618f5e0a30c60e65fe7dd1))
* **table:** add inverted style ([54de113](https://github.com/datacamp/waffles/commit/54de113b881bfa390cb30ae2b06acdf807987425))
* **table:** add row on hover style ([6ca1c91](https://github.com/datacamp/waffles/commit/6ca1c915ad448a33c5d3662d3b9b95243f6ab781))
* **table:** add utility hook to show scroll shadows ([0ea3250](https://github.com/datacamp/waffles/commit/0ea325001e6ed092c175c23703cf9d11052ba1f2))
* **table:** adjust scroll shadows and typings ([4fa0b32](https://github.com/datacamp/waffles/commit/4fa0b325bb65b0141897d20b36f0a674651bdcac))
* **table:** allow custom aria-label for CellCheckbox and HeadCellCheckbox ([26d186a](https://github.com/datacamp/waffles/commit/26d186abbfcc7e5ff7924c1151a50089cbc68900))
* **table:** allow custom icon in HeadCell ([2d8b814](https://github.com/datacamp/waffles/commit/2d8b814d7dfd685b6795061fd1d6a1389e1e4fd0))
* **table:** allow to focus wrapper only if it's scrollable ([7cfdcdc](https://github.com/datacamp/waffles/commit/7cfdcdc51986a4d224671c413eef2df4b32e1e18))
* **table:** automatically set HeadCell icon size ([432a19a](https://github.com/datacamp/waffles/commit/432a19ab418e339bb0c316c21a421ac751032e70))
* **table:** create Table context to set inverted style on CellMenu ([1af7272](https://github.com/datacamp/waffles/commit/1af72723a6c31803bd775a135efdacc837be6082))
* **table:** enable HeadCell to act as sorting trigger ([9353e47](https://github.com/datacamp/waffles/commit/9353e47c7e170f1575b7fb528bc20b7a5ce75fd7))
* **table:** implement basic table structure and styling ([427f5f6](https://github.com/datacamp/waffles/commit/427f5f6f8fd617ac199616db6798d3e6cca38e23))
* **table:** make it span through whole container width ([9042dab](https://github.com/datacamp/waffles/commit/9042dab60eda1389d56841a543e9cc28f82d5fe4))
* **table:** make Table scrollable ([84bd47d](https://github.com/datacamp/waffles/commit/84bd47d37e27002ee2a4fb43d25f2ba9ed04f958))
* **table:** replace HeadCell onSort functionality with regular onClick ([84e621f](https://github.com/datacamp/waffles/commit/84e621fe8a14f30d518cc9c2d26eaf57e39b465f))
* **table:** set inverted CellCheckbox via context ([e3d5bd2](https://github.com/datacamp/waffles/commit/e3d5bd2c7cba0f2d215481f2ee4bdf4a97f541fc))
* **table:** show shadows to the sides if table is scrollable ([4eabe90](https://github.com/datacamp/waffles/commit/4eabe9010e5eeb66dd5877954307ac63cf11fba2))


### Documentation Changes

* adjust BestPracticesCard color to match Notification ([c635bf6](https://github.com/datacamp/waffles/commit/c635bf6209a97f89453349949d26e839d587752e))
* **asset:** update usage guidance and best practices ([983298e](https://github.com/datacamp/waffles/commit/983298ef5d8c27beec677dc653a77625b593f528))
* **avatar:** update usage guidance and best practices ([7442115](https://github.com/datacamp/waffles/commit/74421155e285cb64335d2774d12cbff3e2dc8d98))
* **badge:** update usage guidelines and best practices ([f7ace65](https://github.com/datacamp/waffles/commit/f7ace65694c429de83eae4f1baf1d9c50c66a581))
* **brand:** add product brand components to docs ([d71d5e0](https://github.com/datacamp/waffles/commit/d71d5e0595a4a606ab355f9af227daa4a5b02422))
* **brand:** update usage guidelines ([4ba0471](https://github.com/datacamp/waffles/commit/4ba04712e8718cf7ac69091bf5f3a24ce8806a69))
* **button:** update casing of component name ([6dcad22](https://github.com/datacamp/waffles/commit/6dcad2207e416fbcb2d016eb3529428042e539f0))
* **button:** update doc casing ([943cce9](https://github.com/datacamp/waffles/commit/943cce96e13940c237ab283e09e6e7eebd63054a))
* **button:** update docs and best practices ([17a3a7c](https://github.com/datacamp/waffles/commit/17a3a7ce96ee38eb34e77afcda321b4656ca02f1))
* **button:** update usage guidelines and best practices ([52b2ba8](https://github.com/datacamp/waffles/commit/52b2ba822737b6b4f8fbf0f6939890c789a23a67))
* **card:** update basic example ([e5f809e](https://github.com/datacamp/waffles/commit/e5f809eec4aaa2c151fef93f496d5bdb86b859dc))
* **checkbox:** add indeterminate state example ([3492f58](https://github.com/datacamp/waffles/commit/3492f58fa5cfe16877c5f419b5beaa5043c280e1))
* **checkbox:** add more advanced indeterminate example ([e34f606](https://github.com/datacamp/waffles/commit/e34f6063ede0f9e07d5b310595a3db9a19ed7a19))
* **code-block:** update usage guidelines and best practices ([6363506](https://github.com/datacamp/waffles/commit/63635062f19da88676acf3f269d5ebd5beaea94c))
* **code:** update usage guidelines and best practices ([5ca1fc5](https://github.com/datacamp/waffles/commit/5ca1fc569c50e0ba144abf33e4ad0f82ed85086b))
* **empty-state:** update docs with list details ([1855991](https://github.com/datacamp/waffles/commit/18559913721317a4df1ba261be8bf8eca00c0473))
* **empty-state:** update usage guidelines and best practices ([bbd9566](https://github.com/datacamp/waffles/commit/bbd9566b0cee4490f154cb599b5e220e326bccfc))
* fix BestPractices decor style ([10b935b](https://github.com/datacamp/waffles/commit/10b935b6901350bdb6dd7345aa4aba65235a6f39))
* fix border radius in design tokens examples ([f43570a](https://github.com/datacamp/waffles/commit/f43570a19fcb20e6774a915e74cb1aab67bb7b63))
* fix CodeBlock font size ([95c38e6](https://github.com/datacamp/waffles/commit/95c38e69557ecff4e408a1716385bc7c79b382f4))
* fix layout issue with table overflows ([7f687ea](https://github.com/datacamp/waffles/commit/7f687eafd81b847c15060ad276032ec3510f56c7))
* **heading:** update usage guidelines and best practices ([3663bac](https://github.com/datacamp/waffles/commit/3663bacca1bb161e8ff817bca463e4f50a5ebed9))
* **hooks:** document useShowScrollHint hook ([feee982](https://github.com/datacamp/waffles/commit/feee9821e9a2c2864e961c38d78e63c7f3534d36))
* **icon:** update usage guidelines and best practices ([41c34c1](https://github.com/datacamp/waffles/commit/41c34c1f232c5836bbb1b506aedd116a07ce7e1e))
* **loader:** add `aria-live` example ([ac385db](https://github.com/datacamp/waffles/commit/ac385dbeca6320d758c87dd0d0799a345313de3d))
* **loader:** add aria-label to examples ([4c70b17](https://github.com/datacamp/waffles/commit/4c70b1775a5a9d4b17fc12ebf1e5cb8eba2c7677))
* **loader:** update aria-live example ([9a13fca](https://github.com/datacamp/waffles/commit/9a13fcac666e61f736df21cf0d8e110316946572))
* **loader:** update button alignment for aria live example ([6e9f7da](https://github.com/datacamp/waffles/commit/6e9f7da82b1b6c06e48593c69dad664dd31de247))
* **loader:** update casing of example title ([b9d3b2d](https://github.com/datacamp/waffles/commit/b9d3b2dc9b973cc89ca10642afc1a5eea08b3216))
* **loader:** update styling of aria-live example ([ab3e488](https://github.com/datacamp/waffles/commit/ab3e488e8010ed0078b41ca395a55bbe755011c7))
* **loader:** update usage guidelines and best practices ([24b7620](https://github.com/datacamp/waffles/commit/24b76209d760f2fd2c553179ae888aa680cc43aa))
* **notification:** add banner example ([7ba498c](https://github.com/datacamp/waffles/commit/7ba498c3f90844c0d3f1049fbe28304a9ebf11aa))
* **notification:** update mode prop comment ([ff01efe](https://github.com/datacamp/waffles/commit/ff01efe2d52b4c68b7c8edbb8d425294e1852df6))
* **paragraph:** fix code snippet ([123427f](https://github.com/datacamp/waffles/commit/123427f95bde97658e30d21d5f73e490db4bf033))
* **paragraph:** update usage guidelines and best practices ([cef73e4](https://github.com/datacamp/waffles/commit/cef73e4041ec3dcddc4989ff16a9c092d4732a61))
* **progress:** update usage guidelines and best practices ([450019c](https://github.com/datacamp/waffles/commit/450019cf4d4ff4b01bfd4ec67d09b7e70c13e2f0))
* put SideNav components in flat list ([94fb4fc](https://github.com/datacamp/waffles/commit/94fb4fcc69bdd9e7d128f2093c3bd6b0e9acfd6b))
* **table:** add general guidance and best practices ([d1f450b](https://github.com/datacamp/waffles/commit/d1f450b8b0af9323fcfdc112b93ef003c0085e8d))
* **table:** add main docs page with examples ([bca7597](https://github.com/datacamp/waffles/commit/bca75970496002f47e2c1ad6c2a2c4f67cf64a81))
* **table:** inline props documentation ([3bbdb3a](https://github.com/datacamp/waffles/commit/3bbdb3a114f2233da75e917303e6380fdeca1be7))
* **table:** split advanced example into smaller ones ([2657994](https://github.com/datacamp/waffles/commit/26579945a9e6450ead016e289b200cbaf383e8e2))
* **tooltip:** update usage guidelines and best practices ([c55e42d](https://github.com/datacamp/waffles/commit/c55e42d060bd7b1cbbab77e730f9f0c16a00c223))
* update Checkbox and Table examples ([92bf12b](https://github.com/datacamp/waffles/commit/92bf12b3eb13f8716bf69c0ab41ff83fe553d686))
* update roadmap and navigation ([37dbb51](https://github.com/datacamp/waffles/commit/37dbb5145ee2e23afd44b062e36171b0f00e8487))
* update styling of best practices cards ([77268b6](https://github.com/datacamp/waffles/commit/77268b67fb1c795c14348a5f80d3c5ef5acdeb52))
* update todo guidelines ([5100666](https://github.com/datacamp/waffles/commit/51006664c5dcd5c40a58b018ecbffe8e3d5603a0))
* update top notification margin ([81562b2](https://github.com/datacamp/waffles/commit/81562b2698e6a1d81226a23d08c842d2c70f7377))
* use new Table internally ([b094a6a](https://github.com/datacamp/waffles/commit/b094a6a341d77fdc65d0f5d95535f8fb2566da53))

## [1.14.0](https://github.com/datacamp/waffles/compare/v1.13.0...v1.14.0) (2022-09-21)


### Bug Fixes

* **asset:** propagate currentColor correctly ([d3365bc](https://github.com/datacamp/waffles/commit/d3365bc3abb4709605f608b1f965a7c22d9c6926))
* **code-block:** properly set default size after Code change to inherit ([f29f861](https://github.com/datacamp/waffles/commit/f29f861798cd974a170a41d366d74f8de227a7c5))
* **icon:** add missing currentColor to LinkedInBrand ([8ee082e](https://github.com/datacamp/waffles/commit/8ee082e250c25513c2f45d90f24f1f6668f2680c))
* **slider:** input accept dot followed by zeroes ([c881577](https://github.com/datacamp/waffles/commit/c881577839f74253b1a417a1b34d5f0592402f1e))
* **slider:** properly set filled style ([1e7fe27](https://github.com/datacamp/waffles/commit/1e7fe27b8918a96d0bb7ace828eab20db904bff7))


### Performance Improvements

* **slider:** move track style from emotion to inline style ([c405e81](https://github.com/datacamp/waffles/commit/c405e81c893c545dfa7107aa25c2291156f7d781))


### Core Changes

* add new `useTitleCase` custom hook helper ([5ed06c4](https://github.com/datacamp/waffles/commit/5ed06c4dee6b045247aecdd8e10b1a27c96c6b66))
* **button:** add `disableTitleCase` prop for overriding default behaviour ([4060552](https://github.com/datacamp/waffles/commit/4060552ba4b06f49b8c25f28031f8c497a2b398a))
* **code-block:** add small size ([cf8489a](https://github.com/datacamp/waffles/commit/cf8489a3f3abb96d55c203c109c6ab1b7474bdd8))
* **code:** inherit font size by default ([99df0bd](https://github.com/datacamp/waffles/commit/99df0bd1751775547fe1ff041884076978f686ba))
* **dialog:** add support for `isLoading` on internal button ([84baa80](https://github.com/datacamp/waffles/commit/84baa8062b62b32f418f0a8e661b4e120947f2b3))
* for Code and Link set relaxed line height when size is passed ([94eec4c](https://github.com/datacamp/waffles/commit/94eec4c3c4a5910ed07c70e2b3b6c68b6c522e8c))
* **icon:** add new Website icon ([a22e791](https://github.com/datacamp/waffles/commit/a22e7910303875838ca066f78d7095e654af3ac9))
* **link:** add utility hook to calculate icon size based on font size ([17ca22d](https://github.com/datacamp/waffles/commit/17ca22d77f960d3006e88ce945b50063cb009d7f))
* **link:** allow to set size and adjust icon size automatically ([0d798d1](https://github.com/datacamp/waffles/commit/0d798d16d77bd67c742c482115c0d71e8323251a))
* **link:** animate underline ([0be6f84](https://github.com/datacamp/waffles/commit/0be6f84f09f23755d8c9dad2421d950f7b7d644b))
* **slider:** add basic component ([0e40b11](https://github.com/datacamp/waffles/commit/0e40b11e9cf072a1d08b39abb445ddeea274d600))
* **slider:** add disabled state ([52ad8d3](https://github.com/datacamp/waffles/commit/52ad8d3905ec112838e846d8370c1f755eb8cbe6))
* **slider:** add function prop to customize labels formatting ([b424719](https://github.com/datacamp/waffles/commit/b42471977471554c32265bb9c87e7011932a5c61))
* **slider:** add inverted style ([2bff313](https://github.com/datacamp/waffles/commit/2bff313e97ceb7cb0dc9904a4acb58c79bdfc24a))
* **slider:** add optional inputs to enter values directly ([098ebf0](https://github.com/datacamp/waffles/commit/098ebf0b531b5c45f348e68a0b4e477dd99aad77))
* **slider:** add value and limit labels ([8815a27](https://github.com/datacamp/waffles/commit/8815a2755fcd5df7880f5903e8e8521f6c240072))
* **slider:** added onChangeEnd handler ([a3147cd](https://github.com/datacamp/waffles/commit/a3147cde76fe618e583462386f8fbff45db8d81b))
* **slider:** adjust width of inputs automatically ([05b7756](https://github.com/datacamp/waffles/commit/05b7756eaae5a4ebb5d259a8b3ca49be87da65a9))
* **slider:** align right input text ([568ee37](https://github.com/datacamp/waffles/commit/568ee37b998ed7802ae33650a81ce7a37aa5c371))
* **slider:** create basic styles ([7faef50](https://github.com/datacamp/waffles/commit/7faef50353d6dd74075202e2b188fbc33a18a30b))
* **slider:** create context to clean up commonly shared props ([448f050](https://github.com/datacamp/waffles/commit/448f05019dd03b02ef97b2858d260f2123716a0a))
* **slider:** for input error set error style on track ([c80370c](https://github.com/datacamp/waffles/commit/c80370c320a7433c46a92bf01b311637a9de474b))
* **slider:** handle input errors ([b1a0fef](https://github.com/datacamp/waffles/commit/b1a0fef0035e3e2558fc35d4b8e9be31119a69bc))
* **slider:** improve the way inputs are handled ([48d17c5](https://github.com/datacamp/waffles/commit/48d17c50831314b65badf70e7dfe18b4a4ea0559))
* **slider:** make aria-label required ([c3c0153](https://github.com/datacamp/waffles/commit/c3c0153c958df285a2b7b3728b36fb1e74bb9fff))
* **slider:** pass disabled to inputs ([d667ac3](https://github.com/datacamp/waffles/commit/d667ac3c591f6e68150ff1d9334c0c61fb05f5f3))
* **slider:** remove onChangeEnd handler ([43d2041](https://github.com/datacamp/waffles/commit/43d204171a9706f6f2e29c3fd92a56583794d663))
* **slider:** show error messages for inputs ([f3de2e2](https://github.com/datacamp/waffles/commit/f3de2e27031a50f7c8bb367b5a08f7d7e2d04b6b))


### Documentation Changes

* add default value to prop table ([0e43fd7](https://github.com/datacamp/waffles/commit/0e43fd799d9985c8a67e5869724ccf252cb2e493))
* **code-block:** add basic usage example ([20095af](https://github.com/datacamp/waffles/commit/20095afbc6eab6392883eadb30eab5150d2484ad))
* **code-block:** update examples ([9991809](https://github.com/datacamp/waffles/commit/99918092d423dbf8e8b99ae981eb67d68d312108))
* fix missing prop for progress ([a01da69](https://github.com/datacamp/waffles/commit/a01da69b1b985b92de73454950171b568d2e4297))
* **helpers:** fix typo in example import ([d42825a](https://github.com/datacamp/waffles/commit/d42825ada60797530656674c3e13c49619f88fe7))
* **hooks:** add `useTitleCase` doc example ([5a0d6f3](https://github.com/datacamp/waffles/commit/5a0d6f30e1e8f7c6fd089ccb93b52ab9085d4f9b))
* **link:** remove size advices in props docs ([63a43e4](https://github.com/datacamp/waffles/commit/63a43e4fa983d6e406f599eedc47d07a161aacbc))
* **link:** update documentation and examples ([801f2e8](https://github.com/datacamp/waffles/commit/801f2e878627272715cb6b608f47d22247d4ac31))
* simplified basic usage examples for Code and Link ([a68c231](https://github.com/datacamp/waffles/commit/a68c2315249d0dfd9356deb7826cfd783034f4a3))
* **slider:** add inline props docs ([f654592](https://github.com/datacamp/waffles/commit/f6545921a4a5c1f463273045af5ff058f03ae990))
* **slider:** add main page with examples ([485f5d7](https://github.com/datacamp/waffles/commit/485f5d794aedfd3f7471e5056a47cfb0bd9262a6))
* **tabs:** update docs for tab icon ([6a5d6e0](https://github.com/datacamp/waffles/commit/6a5d6e045b6d855045a6a84818ca9d378d4798c4))
* update Code and CodeBlock documentation ([3ecf378](https://github.com/datacamp/waffles/commit/3ecf378f6d5b740594804763d4491716660aecda))
* update docs for `useTitleCase` hook ([3074f99](https://github.com/datacamp/waffles/commit/3074f9941724b5fe7d73443d2dfafcc39fd82b92))
* update docs for title case helper ([abd6224](https://github.com/datacamp/waffles/commit/abd62240a650db999bb1fd284c6fc8dae7a892e1))
* update roadmap ([cb0d89f](https://github.com/datacamp/waffles/commit/cb0d89f5f973c6a1f7583910e8f38c03692ef9f0))
* update roadmap ([82944df](https://github.com/datacamp/waffles/commit/82944df24aa438a05d84b0bdbf40cd94d18fd853))
* update styling of props table default value ([2e5d336](https://github.com/datacamp/waffles/commit/2e5d336f0ab4359eb58b63f558d1631b7e9631c7))

## [1.13.0](https://github.com/datacamp/waffles/compare/v1.12.0...v1.13.0) (2022-08-19)


### Bug Fixes

* **avatar:** fix shrinking when in flex container ([ee41b05](https://github.com/datacamp/waffles/commit/ee41b0532a63481aa2f8b8e5a288ec614edece66))
* **button:** fix hiding content when isLoading state ([534bcc1](https://github.com/datacamp/waffles/commit/534bcc178b764b350a56bc029b5470c777f42baa))
* **button:** set default `type` to be `button` ([5d99d20](https://github.com/datacamp/waffles/commit/5d99d20a8507505ee4bb462783ff8624ece77c2e))
* **card:** set proper CSS display property ([7c68d25](https://github.com/datacamp/waffles/commit/7c68d2582d38f1ef795d1139e5cb139b3b547d3c))
* **content-container:** remove redundant overflow style ([b5e1473](https://github.com/datacamp/waffles/commit/b5e14738358e4b6c9d1765fc23cd26d3dbea8c26))
* **loader:** fix rendering issues with left side ([120de71](https://github.com/datacamp/waffles/commit/120de71b8da6829e6930ea29542a4e72c6ea6938))
* **loader:** fix top of loader being cut off ([124342b](https://github.com/datacamp/waffles/commit/124342b67304985859fb5d3232b84cc86a0c9392))
* **loader:** minor fixes to rendering of loader ([2a0dd0c](https://github.com/datacamp/waffles/commit/2a0dd0cb964b8d5c97675cda7d2efb491e63afe0))
* **menu:** inject trigger inverted prop conditionally ([faa943b](https://github.com/datacamp/waffles/commit/faa943b2f0c7d66c05bfa32abcb8bfb2817a2c1d))
* **menu:** remove spurious attribute ([89ad641](https://github.com/datacamp/waffles/commit/89ad6410ef33bc5e334749568efd6814c0f306ac))
* **progress:** add initial width attribute for chrome issue ([00f563b](https://github.com/datacamp/waffles/commit/00f563b826c301c06c04363cedd7f7631a9b6e72))
* **tabs:** make children optional ([3d3c73f](https://github.com/datacamp/waffles/commit/3d3c73f39fd2a3e75e632d5309482e4ce3d8e505))
* **tabs:** remove unnecessary comment ([e4b5141](https://github.com/datacamp/waffles/commit/e4b51413d0f724604d63772f54ce822e73ba9ce1))


### Core Changes

* **button:** add isLoading property for loader variant ([5fa8180](https://github.com/datacamp/waffles/commit/5fa81808076fcdacb1b5123bdd5eff9986a85b50))
* **card:** add headstone slot ([6beace6](https://github.com/datacamp/waffles/commit/6beace6285136da51034cc87d4837b2726352c53))
* **card:** implement basic Card component ([3e96b62](https://github.com/datacamp/waffles/commit/3e96b623550560bbd1b873b5ceee0160ef385b3d))
* **card:** make it polymorphic ([4a9fa16](https://github.com/datacamp/waffles/commit/4a9fa165b80f68b2a2c88e4893d7fb3cff4c8da7))
* **card:** reintroduce default padding ([195ebdd](https://github.com/datacamp/waffles/commit/195ebddf5ddc98abf0722280865905e941f649e3))
* **card:** remove default padding ([86800ae](https://github.com/datacamp/waffles/commit/86800aef47b998e68e9f9a226218efc1e859a03f))
* **card:** rename disableHover to disableHoverEffect ([bcdcade](https://github.com/datacamp/waffles/commit/bcdcaded35ea99b2e85c9def6b26f64182de3683))
* change thin shadow to border for Menu and Toast ([171ab5b](https://github.com/datacamp/waffles/commit/171ab5b8833b5b9ce19d7f9297c0352ae3cb1fee))
* **form-field:** removed optional ID prop ([0953300](https://github.com/datacamp/waffles/commit/09533003b541a239e69eddb34bd354713ee7fb4c))
* **hooks:** update useId implementation ([b7c0ff6](https://github.com/datacamp/waffles/commit/b7c0ff630cd2ee545b843e82d1fca9d734557254))
* **icon:** add new Multidoc icon ([25caabf](https://github.com/datacamp/waffles/commit/25caabf2e1a81a9d84933d5d245deb7f580c9972))
* **menu:** add more placement options ([9e52628](https://github.com/datacamp/waffles/commit/9e52628ba153c12948a79092f9dedbd914e7523b))
* **progress:** initial wip progres component ([9cd415b](https://github.com/datacamp/waffles/commit/9cd415bbac14bb4c13b29ac3af59bf8acb197f76))
* **side-navigation:** set icon size based on item size ([1d372cf](https://github.com/datacamp/waffles/commit/1d372cfbb7951ea3abc9eac925c443921fc10b17))


### Documentation Changes

* align landing page layout with other pages ([6f6c4aa](https://github.com/datacamp/waffles/commit/6f6c4aa4758aafa2de7367c4e5fd8fa265a7c478))
* **button:** add loading state example ([d881248](https://github.com/datacamp/waffles/commit/d88124841343ed02709f7631723a4612407b5317))
* **button:** add notification for button on loader page ([a76144d](https://github.com/datacamp/waffles/commit/a76144d9713acc63af061f10b8dc2bb7e16360f6))
* **card:** add doc page with examples ([66f1ef6](https://github.com/datacamp/waffles/commit/66f1ef6f25cdcb7c0538956d9730efe3c38f3247))
* **card:** update examples ([d45c018](https://github.com/datacamp/waffles/commit/d45c018dd60c11ac2badef49bd7604b3c872b6c2))
* fix CodeBlock background color ([5ca8d0f](https://github.com/datacamp/waffles/commit/5ca8d0ff2c682348d1a0970fbb762b418d14d5ac))
* mark Card as polymorphic ([77962c3](https://github.com/datacamp/waffles/commit/77962c35eac61e8d61cdad5209b1ab88d67c8690))
* **menu:** update placement in examples ([7ed5a39](https://github.com/datacamp/waffles/commit/7ed5a395f55c21682fc3d7824938a27a6ebc157e))
* **progress:** add page and examples for progress ([4e7103e](https://github.com/datacamp/waffles/commit/4e7103e9addf7158af18dac83944dd27aa7df59b))
* **progress:** update custom label example ([2e13076](https://github.com/datacamp/waffles/commit/2e1307628c3067d0fe276caff676ce63ea10474c))
* remove redundant prop from PageHeader ([dadad4c](https://github.com/datacamp/waffles/commit/dadad4c044e6b30eeef12af96034fd90a6cc0242))
* simplify page layout with grid ([21147da](https://github.com/datacamp/waffles/commit/21147da67e25acb5db220c39a646f37c23246cb8))
* **tabs:** add example without children ([167e243](https://github.com/datacamp/waffles/commit/167e243912a450d13d77753b1aa1df8747847e0b))
* update design tokens info about colors ([ebb7e2f](https://github.com/datacamp/waffles/commit/ebb7e2f3fc86214add822a8f65989d7698fed89c))
* update navigation and roadmap ([68d75ab](https://github.com/datacamp/waffles/commit/68d75abef8df4febdb15f7d9e41c81cbc93b936f))
* update PageHeader layout ([40951d4](https://github.com/datacamp/waffles/commit/40951d4cdf222a8272fc8d1df05d012231185bfc))
* update roadmap ([ca40652](https://github.com/datacamp/waffles/commit/ca406525d0f66924141423f2a86f177580286fce))
* update some Card styles in docs ([4a71a66](https://github.com/datacamp/waffles/commit/4a71a66f45f0761b84dbab3bddc03d97ca3eba36))
* update useId description and example ([c1f45a8](https://github.com/datacamp/waffles/commit/c1f45a894b155cb81f2795c1665eace8efdea5bc))
* use Card and update custom components borders to match its style ([70038d8](https://github.com/datacamp/waffles/commit/70038d8e5607deb1557ccbe3d5952e8a80f884f7))

## [1.12.0](https://github.com/datacamp/waffles/compare/v1.11.0...v1.12.0) (2022-07-29)


### Bug Fixes

* **asset:** fix barchart asset misalignment ([951ffe4](https://github.com/datacamp/waffles/commit/951ffe4448fe915447f12e0699e02478b3ecba20))
* **menu:** icons alignment in Safari ([73ff13a](https://github.com/datacamp/waffles/commit/73ff13a4483827ca56736efb81ba9c2e04745543))
* pass key when cloning to Tooltip and Menu trigger element ([69a3a2a](https://github.com/datacamp/waffles/commit/69a3a2ad32b3016cba7aa24df24c029536529cc6))
* **resizable:** prevent text selection when dragging in Firefox ([d3c6108](https://github.com/datacamp/waffles/commit/d3c6108eb4c73b6709cf2c30776e66019253e7f7))
* **resizable:** prevent wasteful rerender when onResizeEnd is called ([ef09854](https://github.com/datacamp/waffles/commit/ef0985479ce0502417b4807f39062e7661f71b45))
* **resizable:** remove possible memory leak with how onResizeEnd was called ([f94cafd](https://github.com/datacamp/waffles/commit/f94cafdac8977a544885f246f39768a6920e543d))


### Documentation Changes

* **asset:** update ordering of content on asset page ([f5c9159](https://github.com/datacamp/waffles/commit/f5c915992f966b82c2e5b4ec72f9da045acdc55e))
* fix table of contents in production build ([ba36021](https://github.com/datacamp/waffles/commit/ba36021b80c43bb66bd843f5e69b536cd4bb8c20))
* **icon:** fix margin on icon grids ([ff4e5ed](https://github.com/datacamp/waffles/commit/ff4e5edb7c590eac894824639d8edcbc4bf4f0f2))
* make top bar links open in new tab ([1bf7536](https://github.com/datacamp/waffles/commit/1bf75365bf7a52591a61e80340ad44de276dc4a3))
* **resizable:** add examples and playground config ([b1399e4](https://github.com/datacamp/waffles/commit/b1399e4f70773268217c4ccb63780faa9c259a43))
* **resizable:** add inline props documentation ([cae75f5](https://github.com/datacamp/waffles/commit/cae75f56edacc8f3fec447e9e81ba00aa4682f87))
* **resizable:** create main documentaiton page, update navigation ([df2ea62](https://github.com/datacamp/waffles/commit/df2ea620e8c2b49c0be02d10fcbb63b7ba4487ca))
* **resizable:** update advanced usage example ([d58a140](https://github.com/datacamp/waffles/commit/d58a1402cf30383a5a41c6141753c10091eea0f3))
* **resizable:** update docs after API changes ([8f436f7](https://github.com/datacamp/waffles/commit/8f436f7e451432c7c3c707bd16b56ed25d5f3b15))
* **resizable:** update playgroundConfig and inline props docs ([9c0e78f](https://github.com/datacamp/waffles/commit/9c0e78f4c01448b99f8cae8b61b4a49d557e383c))
* show more accurate arrayType name ([8568555](https://github.com/datacamp/waffles/commit/85685558cfb180db16a9e8e2a980016314df8ecf))
* update aria-labels on top nav links ([2cfbe5d](https://github.com/datacamp/waffles/commit/2cfbe5d3c5b8934729c602e1fc2bcc6a25eecb84))
* update heigh of inverted Resizable example ([1481504](https://github.com/datacamp/waffles/commit/1481504555e0834b02df504fc08e1028f4b1230f))
* update initialProportions in examples ([6fcc276](https://github.com/datacamp/waffles/commit/6fcc27669f998d89fe82f84f0e9eb0f59a171081))
* update inline props docs ([a0611cc](https://github.com/datacamp/waffles/commit/a0611cc15d55bcd061fc31d2762f112f7bdf46b5))
* update style of required props dot style ([ae86407](https://github.com/datacamp/waffles/commit/ae8640705f72eca7de53e4fba3f895465bae66db))


### Core Changes

* **button:** decrease spacing between icon and text for small size ([b705ca2](https://github.com/datacamp/waffles/commit/b705ca21df704ee9614b107911deafcc41e847f4))
* **code:** update background blending mode so it renders better on beige ([ec9f0d6](https://github.com/datacamp/waffles/commit/ec9f0d6b5d4e2f15b1caa820a17a840d6716db0b))
* **form-field:** update style of required dot to match Menu one ([13b2729](https://github.com/datacamp/waffles/commit/13b27290ed9bb9867dcd7105a5fe16598e68fc0e))
* **icon:** add Attention regular and inverted ([b20b8c1](https://github.com/datacamp/waffles/commit/b20b8c1b92946c9f150dcfee2cad37e24b834f5a))
* **icon:** add ClosedCaptions ([fe0ec08](https://github.com/datacamp/waffles/commit/fe0ec08a4cf9d8e856175d36d16a2504d4da2f89))
* **icon:** add new sorting and tablet icons ([badbf29](https://github.com/datacamp/waffles/commit/badbf292af69f49ebf7b3080470443085aaa414d))
* **icon:** add Scissors ([5e55987](https://github.com/datacamp/waffles/commit/5e55987de5a36f48dcdd194cc6a58f23ecde4d44))
* **icon:** remove AttentionCircle regular and inverted ([50f16ed](https://github.com/datacamp/waffles/commit/50f16ed68dab94e88de2ab7838755fc8f00a9d10))
* **input:** increase spacing for small and large input ([a876e97](https://github.com/datacamp/waffles/commit/a876e97d692f607fdb1e5818e8dcb7d4520ac105))
* **resizable:** add inverted style ([c0c84ec](https://github.com/datacamp/waffles/commit/c0c84ec48a9cc72f3d0a02fcc3f16e3636b57ca4))
* **resizable:** add optional resize end and start callbacks ([8b45a48](https://github.com/datacamp/waffles/commit/8b45a483f608d43fc990a78bf1bd45adba7a169a))
* **resizable:** allow resizing with keyboard ([06d0eb6](https://github.com/datacamp/waffles/commit/06d0eb657f40c1393171995193e9ad4bd0f76c5f))
* **resizable:** allow to set subsections initial proportions ([9e702c3](https://github.com/datacamp/waffles/commit/9e702c38dd117bd52a34d0f6398c1cab5e134119))
* **resizable:** alow to retrieve proportions after dragging stopped ([0db907c](https://github.com/datacamp/waffles/commit/0db907c475caaa3c145613a1433022256ad70da5))
* **resizable:** clean up listeners when unmounting ([4e234b0](https://github.com/datacamp/waffles/commit/4e234b0bd6e00aa7dcbfed2a26fe0b9d2eee9982))
* **resizable:** create styles for Resizable internal components ([f563709](https://github.com/datacamp/waffles/commit/f563709423682b97841024e296bd563dc95b9ce6))
* **resizable:** divider separator lines could be toggled ([7e9626c](https://github.com/datacamp/waffles/commit/7e9626c0395bd29e0e3ecc9d532e569bacb37e31))
* **resizable:** implement resizing for vertical orientation ([8e611e2](https://github.com/datacamp/waffles/commit/8e611e219160a166d30617887e75b265021a7299))
* **resizable:** improve cursor and divider highlighting behavior ([58def4d](https://github.com/datacamp/waffles/commit/58def4d34a12ef845155a9afa05e2aa3ee67127f))
* **resizable:** optimize how subsection size is applied ([97c055c](https://github.com/datacamp/waffles/commit/97c055ce42e35cc8ffb0b735f0f776ddeb5208bc))
* **resizable:** recalculate panels sizes when browser window is resized ([a6dd5fc](https://github.com/datacamp/waffles/commit/a6dd5fc935d783abca619288be25452ecb2a96b1))
* **resizable:** rename initialProportions prop to defaultProportions ([f027f06](https://github.com/datacamp/waffles/commit/f027f0628eb449823d02e4cdbc9c33bcced45d7c))
* **resizable:** rename orientation prop to layout ([b272b1a](https://github.com/datacamp/waffles/commit/b272b1ac62826e6e7427b2ef51646557365215d9))
* **resizable:** rename showSeparators prop to showDividers ([2ce6a35](https://github.com/datacamp/waffles/commit/2ce6a356a1fe1ae816f54e07dadbaea3184c19c8))
* **resizable:** support both vertical and horizontal orientation ([6ad1e74](https://github.com/datacamp/waffles/commit/6ad1e74826b5ffa053c7617126c5dace2075e7ea))
* **resizable:** update styling according to guidelines ([59019af](https://github.com/datacamp/waffles/commit/59019afa9f24e5e8d9e0542909fad607e06e39e5))
* **select:** increase spacing for small and large select ([e2dc405](https://github.com/datacamp/waffles/commit/e2dc405affd4db57728df62c26768f34b9ae650a))
* **text-area:** increase spacing for small and large textarea ([81cc86b](https://github.com/datacamp/waffles/commit/81cc86b7231fa2a92b8b7fae4d1a700fdf58d3b3))
* **tokens:** update greenDark and greenDarkText colors ([1c4e159](https://github.com/datacamp/waffles/commit/1c4e1591085d22a172d11a31d1ec963d79ce8526))
* update icon for warning Toast and Notification ([e430dd4](https://github.com/datacamp/waffles/commit/e430dd4a4ec4cfaebcac89f06846a1ec40db65a6))

## [1.11.0](https://github.com/datacamp/waffles/compare/v1.10.0...v1.11.0) (2022-07-15)


### Bug Fixes

* **asset:** fix opacity of assess alpa loop asset ([9060021](https://github.com/datacamp/waffles/commit/9060021f9a66230f5c44522b0153c0e7beb743eb))
* **avatar:** fix artifacts around edge of component ([feb2f63](https://github.com/datacamp/waffles/commit/feb2f63b0a6f255f4a406c52198358771a2c8b66))
* **loader:** fix rendering issue in safari ([1152321](https://github.com/datacamp/waffles/commit/1152321e241965d7177c14b3a3faca357472b861))
* pr feedback Mateusz ([05cbaab](https://github.com/datacamp/waffles/commit/05cbaab90bd5d68e46182f0a9d22f29f76c3384a))


### Documentation Changes

* add contents table support for asset grid headings ([7e15279](https://github.com/datacamp/waffles/commit/7e15279d32e3e1c487df19e1de1fc871e0ba6af7))
* add figma link to top navigation ([2eab0fe](https://github.com/datacamp/waffles/commit/2eab0feebcaa9a65645336c54fff6015a6a8955e))
* add horizontal rule between sections ([5f27ab0](https://github.com/datacamp/waffles/commit/5f27ab0ece1788391ed801d27c2100ecde2c38db))
* add new page heading ([10ba17e](https://github.com/datacamp/waffles/commit/10ba17e97b6074c4ff5691d77aee9da71c1bc444))
* add scroll to top link ([1a70527](https://github.com/datacamp/waffles/commit/1a705276a5486a1c45bb305aa78d3284ac72b84f))
* adjust margin values ([1cf79d2](https://github.com/datacamp/waffles/commit/1cf79d25170fc1bc14f1baebc26adfa1f30a0dc7))
* **empty-state:** add initial docs page ([f33f17e](https://github.com/datacamp/waffles/commit/f33f17e83fbb0b4b5b3a8f777e44b4a549d54578))
* **empty-state:** update component examples ([860c13e](https://github.com/datacamp/waffles/commit/860c13e2de981f8c70dbdda87a8f5751b82ec697))
* **empty-state:** update example content ([2cdd92b](https://github.com/datacamp/waffles/commit/2cdd92b1502e5c5158c5f79c835443435ff48658))
* fix and tidy up scrolling with active section ([87daf76](https://github.com/datacamp/waffles/commit/87daf76ef51807abc45c7536c41cd4ba63f655ea))
* fix content layout padding ([8644a4a](https://github.com/datacamp/waffles/commit/8644a4a9fecc010e928a3f0186450b621120d9ec))
* fix design tokens table padding ([c364c8d](https://github.com/datacamp/waffles/commit/c364c8d1cb97fb9ad4090c3e03a4f54c96e79e8c))
* fix SideNav advanced example ([32e67ba](https://github.com/datacamp/waffles/commit/32e67ba20fffb00d2712d0fde0e1a126e3056d9f))
* fix sticky scrolling of contents table ([a00d3af](https://github.com/datacamp/waffles/commit/a00d3af9fccd6a491e08af59d6eb98f282bfa02d))
* improve Menu examples on mobile ([6b5c8b4](https://github.com/datacamp/waffles/commit/6b5c8b44c82a607a70edab1e78025b6b61e696c1))
* overwrite new table styling ([05bc389](https://github.com/datacamp/waffles/commit/05bc38915fe6b529e44edced3c3fb1121f188d2c))
* remove new badge from older components ([9f798d7](https://github.com/datacamp/waffles/commit/9f798d71fa88cdfc854957b51973a528f9fe5d26))
* set active section in contents based on heading visibility ([c06b18c](https://github.com/datacamp/waffles/commit/c06b18c2b2dc75bcf7e6d67c6e2128ffdb0a0e03))
* update active heading based on section ([3c6cceb](https://github.com/datacamp/waffles/commit/3c6cceb9dc8d75718f2e5398a7b6cb12757c5fba))
* update animation of back to top button ([9347226](https://github.com/datacamp/waffles/commit/9347226f3f4c127416a8e9cdbdd41b10a8a9e3d5))
* update Dialog playground ([c9f1052](https://github.com/datacamp/waffles/commit/c9f1052048d4d8c92c3d681110d8cb9f60a7db70))
* update docs bgr color according to fixed guidelines ([b976425](https://github.com/datacamp/waffles/commit/b976425167093df84ea74f32399f60b2c5900021))
* update Menu examples ([0a7356c](https://github.com/datacamp/waffles/commit/0a7356c025a2fbc9dddbbf3e7606d0105894b27b))
* update prop table union types styling ([7b776e1](https://github.com/datacamp/waffles/commit/7b776e19cc9a91ca249bf6c47b5c33a9e1df1ed6))
* update props table styling ([45ad5a3](https://github.com/datacamp/waffles/commit/45ad5a31fe3447769fae60646207f2504fb58b1e))
* update roadmap ([00fdbc0](https://github.com/datacamp/waffles/commit/00fdbc0495f38ba678bd6f64d1111b00e15ec339))
* update roadmap ([bba9ad0](https://github.com/datacamp/waffles/commit/bba9ad06a754b1fef4b240e8f6f2c3071ccfce1f))
* update spacing for props table types ([cce0c2f](https://github.com/datacamp/waffles/commit/cce0c2fca1c0e11b3b6a6e461aa6ef5703b663e5))
* update styling for component status table ([06d2c27](https://github.com/datacamp/waffles/commit/06d2c27d87901271e5bf5c6e9bb4ddd90148c803))
* update table of contents padding ([beaaf61](https://github.com/datacamp/waffles/commit/beaaf618ec64690f0e51136d360501c5d045ee11))
* update table of contents styling ([52d4175](https://github.com/datacamp/waffles/commit/52d41758508b9b4e1c0b5351aff9de37ae409708))


### Core Changes

* **empty-state:** add new empty state component ([dea4d4c](https://github.com/datacamp/waffles/commit/dea4d4ce39f60e05e62502a3b0cbb215ea0c955b))
* **menu:** add destructive variant to Menu.Item ([f50ec0d](https://github.com/datacamp/waffles/commit/f50ec0d94977a44dcee5f86aaa6a2723c220fd69))
* **tabs:** add gradient to left side of tabs ([2f071fc](https://github.com/datacamp/waffles/commit/2f071fc80796a1061de6d7d740e5499a54b8a5df))
* update button placement in Dialog, AlertDialog, and Drawer footer ([6f1d797](https://github.com/datacamp/waffles/commit/6f1d7972f2b2863619930c3445beaefbfcf17fab))
* update long content buttons behavior in modals footer ([8e16081](https://github.com/datacamp/waffles/commit/8e16081465849910dacfffe006b1813bc35a61fc))
* update modals button and footer so wrapper is no longer needed ([8d9b2c1](https://github.com/datacamp/waffles/commit/8d9b2c1cb1b2587c4644c4a332a351e07a2f489a))

## [1.10.0](https://github.com/datacamp/waffles/compare/v1.9.0...v1.10.0) (2022-06-10)


### Bug Fixes

* **asset:** clean up some assets and pass currentColor properly ([8382087](https://github.com/datacamp/waffles/commit/8382087cf5c2efe39101da11d1de99558157006b))
* **notification:** fix padding for heading and description ([eb976a9](https://github.com/datacamp/waffles/commit/eb976a97566d141f6197414e45db931d7e4b0b65))
* **side-navigation:** proper sidebar height on iOS ([351ef35](https://github.com/datacamp/waffles/commit/351ef357bf2b3ae3b0776e87972ffbbe16383b25))
* **side-navigation:** set proper height of sidebar on iOS ([439ae8e](https://github.com/datacamp/waffles/commit/439ae8eeb89b152c061b9a09b252c8e4629b2690))
* **text-area:** properly sync auto grow wrapper with content ([65a8a31](https://github.com/datacamp/waffles/commit/65a8a3170dbf130ef76c833b327fe158e0dd1007))
* update notification and toast alignment ([b9ef466](https://github.com/datacamp/waffles/commit/b9ef466f2a2bf64a2e38ccbfcdd6a4bb112a859f))


### Core Changes

* **asset:** add new assignment assets ([9fbf420](https://github.com/datacamp/waffles/commit/9fbf420b12974c83fd6d738fc565d40058a47ab5))
* **assets:** remove intel logo ([87d7e9e](https://github.com/datacamp/waffles/commit/87d7e9e0f650159476d0b54695c037595ffe5392))
* **avatar:** add avatar component ([3fd983d](https://github.com/datacamp/waffles/commit/3fd983d9ea9f06922b02cedc1029256cee52222f))
* **avatar:** add prop for controlling content fill ([079e633](https://github.com/datacamp/waffles/commit/079e6335d05949a155bbbc459784461e8320fad6))
* **drawer:** make width consistent with SideNav ([10a500c](https://github.com/datacamp/waffles/commit/10a500c5db999d87d07fc4a47c361cb31071925c))
* **icon:** add new figma brand icon ([f0a7b18](https://github.com/datacamp/waffles/commit/f0a7b1839b1d816f185b28c2e225d37579f94415))
* **icon:** update FlashInverted and Medal icons ([8265afe](https://github.com/datacamp/waffles/commit/8265afe2ef28e78528874e55fee20df8cba160a0))
* **loader:** add new loader component ([50c6d83](https://github.com/datacamp/waffles/commit/50c6d83c73863ed608c837d82b3c50de3752152b))
* **menu:** improve the way items are indexed for keyboard navigation ([26f6314](https://github.com/datacamp/waffles/commit/26f63145374771eb9c3dc867d32dbd9681b5bc52))
* **side-navigation:** make width of mobile sidebar dynamic ([3f10c44](https://github.com/datacamp/waffles/commit/3f10c44ad6cd75bdfe2b5a930b22d5e282da688e))
* **tabs:** make tabs scrollable on all devices ([071cd25](https://github.com/datacamp/waffles/commit/071cd256c58b53c3144cbfd2b1bc5f669aef709b))
* **tabs:** update Tab subcomponent focus style ([b3101de](https://github.com/datacamp/waffles/commit/b3101de91211538450397b17a6cb6c33756eea7b))
* **text-area:** adjust spacing so with single row it looks like input ([2eace5f](https://github.com/datacamp/waffles/commit/2eace5f93303a17ca5efafcb7ae908861bb207f7))
* **text-area:** set minimum height and adjust large size padding ([8bd2777](https://github.com/datacamp/waffles/commit/8bd27775c9aa51b054da42ecfa2107ec7a1aa958))
* **tokens:** add xxlarge spacing token ([2a61d21](https://github.com/datacamp/waffles/commit/2a61d213cede07987b5eb0dc3b88c6d262de513c))
* **tokens:** place all tokens in tokens.json in global group ([66f6a37](https://github.com/datacamp/waffles/commit/66f6a37be2ee902a72180e33dea3ecf67016845e))
* **tokens:** update structure of tokens.json file ([0b19928](https://github.com/datacamp/waffles/commit/0b19928f15594cb2edb125b81e9073e4d7494f7e))


### Documentation Changes

* add some Figma missing links in component status table ([c66477a](https://github.com/datacamp/waffles/commit/c66477a68e9244de0fb97d17801b4e67f2512a1e))
* add updated fonts to documentation website ([fe8f29d](https://github.com/datacamp/waffles/commit/fe8f29d612585cb82ecf2cc41cd0a30d99f581bb))
* **asset:** add assignment category to asset docs ([7ad4e61](https://github.com/datacamp/waffles/commit/7ad4e6131a8a3b21cc83fcb495573fc1cadfc8b8))
* **avatar:** add initial page and examples for avatar ([ab40fb9](https://github.com/datacamp/waffles/commit/ab40fb9fc053d83edd2145354ca2b89411ac91be))
* **avatar:** tidy up styling for examples ([9c69a98](https://github.com/datacamp/waffles/commit/9c69a9849f03fb4c069e0bea72f0cbea0423c91d))
* **avatar:** update content of examples ([2ec72d6](https://github.com/datacamp/waffles/commit/2ec72d672bdaa6223b3b62b5c6d83c0705a430b1))
* **avatar:** update examples and prop docs ([bf24c40](https://github.com/datacamp/waffles/commit/bf24c404035ba1b13b4512fea492b3c94b269139))
* **avatar:** update examples content ([f114bb4](https://github.com/datacamp/waffles/commit/f114bb4ff7286649e907aa873159532b232c054b))
* **avatar:** update navigation and roadmap ([43560af](https://github.com/datacamp/waffles/commit/43560af5ec201f91a27fbc0d84f7f89e4d5f06f8))
* clean up langing page images ([0138b28](https://github.com/datacamp/waffles/commit/0138b28b1a050117c4cd12565bfdfe38add5b12f))
* downsize best practices icons bacgrounds ([c077a49](https://github.com/datacamp/waffles/commit/c077a491814fb1127d0dc8e09279a225d9b84482))
* **form-field:** update examples ([1936b8c](https://github.com/datacamp/waffles/commit/1936b8c7b0c87f6d296eed6d5c1922c6432b9afe))
* **form-field:** update size example sentence casing ([9aaeea1](https://github.com/datacamp/waffles/commit/9aaeea1fb1d3f8288d33dfd2f09cdeb3e9c8c09e))
* **loader:** add docs and navigation item ([9ec92a1](https://github.com/datacamp/waffles/commit/9ec92a1e15b8fc532e4bd7820501cac62c2c31ac))
* **loader:** update prop description ([b55aa92](https://github.com/datacamp/waffles/commit/b55aa92a62fc867cf4fbfea79a79ac0d41d9daf8))
* replace waffles logo in header with the onew from assets ([f2eecba](https://github.com/datacamp/waffles/commit/f2eecbaf2e3a809e164c15c28e25f4b09cd7532f))
* small examples improvements ([5d15108](https://github.com/datacamp/waffles/commit/5d15108115d152db5cad5e83985e283ae189210e))
* small update to SideNavigation ([0a3b0aa](https://github.com/datacamp/waffles/commit/0a3b0aac3b7bc74c7c4d65bddb27aba86ea8b0de))
* **text-area:** add size variant example ([bcba074](https://github.com/datacamp/waffles/commit/bcba0743334502d366169e14e26049aedcf10486))
* update component status ([94b23af](https://github.com/datacamp/waffles/commit/94b23afda637103dd1646f31b684ed6ae3943b92))
* update docs and examples ([54775d7](https://github.com/datacamp/waffles/commit/54775d7f758d6149acdb9804a34e4253032ecdb9))
* update examples ([05f5825](https://github.com/datacamp/waffles/commit/05f5825ee2be2a174b94d25b0508e4bd62c05000))
* update Menu advanced example with custom style item ([b0d78f7](https://github.com/datacamp/waffles/commit/b0d78f76527d3aa564da6a4f09d8e9cfe16d1ca1))
* update waffles name in dev docs ([ce698fa](https://github.com/datacamp/waffles/commit/ce698fad314c94be1c7a5ccecf206ac4b567ebd6))

## [1.9.0](https://github.com/datacamp/waffles/compare/v1.8.1...v1.9.0) (2022-05-26)


### Bug Fixes

* **asset:** fix alpa asset colours ([a1e568f](https://github.com/datacamp/waffles/commit/a1e568fa2111b45df43ad8c41572479135d0ecf3))
* **button:** remove redundant onClick handler ([8c817cc](https://github.com/datacamp/waffles/commit/8c817cc0a285754cdcc3e7e242f99644e1a9d341))


### Core Changes

* add new datacamp branding components ([94cd649](https://github.com/datacamp/waffles/commit/94cd649814d6a03368c77f75d4d86758df0fa558))
* **asset:** add alpa assets ([957233a](https://github.com/datacamp/waffles/commit/957233ae67590fd0d6cea559484de2bdd3ce2acf))
* **asset:** add new 3d asset components ([f50e180](https://github.com/datacamp/waffles/commit/f50e180bd2185b0c6dd428a4dcf2942493aac19a))
* **asset:** add new partner logo assets ([8cd04b0](https://github.com/datacamp/waffles/commit/8cd04b0b5abaa828c9678451180a7ed4ab253e1c))
* **asset:** add regular waffles logomark ([22d7d02](https://github.com/datacamp/waffles/commit/22d7d0296c2cdab2b76142056317d9708080b435))
* **asset:** add waffles logo and logomark assets ([0b53948](https://github.com/datacamp/waffles/commit/0b539489ae296f6c476275c8270b7d481206a9c9))
* **dialog:** update Button typings ([f7abfb5](https://github.com/datacamp/waffles/commit/f7abfb54f66115e15b968523710cc46b25ed3930))
* **form-field:** update children type to JSX.Element ([6e9d1f7](https://github.com/datacamp/waffles/commit/6e9d1f7f7393901570bda14a866e002926f7a871))
* **helpers:** add deepChildrenMap utility ([ae5a5c1](https://github.com/datacamp/waffles/commit/ae5a5c1929b5efc1e4bc8e58fe904fcddae78ece))
* **icon:** add new minus icon ([457eb95](https://github.com/datacamp/waffles/commit/457eb9531f9511d838b555122aa92fe65337cf61))
* **icon:** update linkedin token and icon color ([df97b3f](https://github.com/datacamp/waffles/commit/df97b3faf8e13c656ee480852e6bfe7b7cc52d10))
* improve way floting components position is updated ([91b6781](https://github.com/datacamp/waffles/commit/91b6781980f36da49bec9d629843be388b91b283))
* **logo:** add new logo components ([f906dd3](https://github.com/datacamp/waffles/commit/f906dd3ad47d4f42a0cd714cdaa7594f1d822c40))
* **logomark:** add new logomark components ([3fcce80](https://github.com/datacamp/waffles/commit/3fcce808ebb43d86cae13bf67aea4b75cb0b7fde))
* make usage of Portal more stable across various components ([ef05361](https://github.com/datacamp/waffles/commit/ef053610f123da300a0a2f649bcd52cae9e9e11b))
* **menu:** add active Item style ([7b6c312](https://github.com/datacamp/waffles/commit/7b6c312eba1964a2cfb5ee69b63a8204d59f224d))
* **menu:** add alert dot indicator ([d960e5f](https://github.com/datacamp/waffles/commit/d960e5fa796042df8c87836f820a8494689168a6))
* **menu:** add Button subcomponent ([9b1c632](https://github.com/datacamp/waffles/commit/9b1c6323dda2be959aae098417fbdc1419f3f6c8))
* **menu:** add Category subcomponent ([bb4dc8b](https://github.com/datacamp/waffles/commit/bb4dc8b0bcb6fcf2523223fb92f52a6fc180e09c))
* **menu:** add icons to Item ([69e2198](https://github.com/datacamp/waffles/commit/69e21984cb17874e59f5bb55084f8a7cc80f2976))
* **menu:** add update menu style and add styles for subcomponents ([1140d29](https://github.com/datacamp/waffles/commit/1140d2931557783fb9aa34b54305b3ee4ccd3b23))
* **menu:** adjust item and dot spacings ([3568986](https://github.com/datacamp/waffles/commit/35689863ffbf125c0039c7d710496fd91d730c2b))
* **menu:** allow setting menu placement ([d9596d3](https://github.com/datacamp/waffles/commit/d9596d31f6e989dc3b67e84ee7cc0ff67a092875))
* **menu:** associate dropdown and trigger by ID ([37ba661](https://github.com/datacamp/waffles/commit/37ba661213aa404feed2302c5f859ac7803a14ad))
* **menu:** create menu context ([3004bc3](https://github.com/datacamp/waffles/commit/3004bc319d82086148c053d8e9d079d5d907c51f))
* **menu:** expose useMenu hook ([826a311](https://github.com/datacamp/waffles/commit/826a311994fd55fb6327641a7a3c59cafda66a53))
* **menu:** focus menu trigger after menu got closed ([36db13f](https://github.com/datacamp/waffles/commit/36db13fede8517e34451ed6320169d9ef1636caa))
* **menu:** handle even very long content in Item ([5e3e4cf](https://github.com/datacamp/waffles/commit/5e3e4cf2bffe483b6110392ff1380676fb006a22))
* **menu:** implement basic Item component ([081981c](https://github.com/datacamp/waffles/commit/081981c49c5fe8bad2baa050ee879bf86b853001))
* **menu:** implement internal logic using floating-ui ([56afb1b](https://github.com/datacamp/waffles/commit/56afb1bd3bfdf40c21b4cc596d42330557a2eea3))
* **menu:** implement inverted style for Menu and all subcomponents ([6cb3ca6](https://github.com/datacamp/waffles/commit/6cb3ca67fd83057e2475bbe908d439b9b648d336))
* **menu:** label and description could be set for Item ([7d7835e](https://github.com/datacamp/waffles/commit/7d7835ef11c636c866e92013b9dcc96f8aae4631))
* **menu:** make Item polymorphic ([17d8878](https://github.com/datacamp/waffles/commit/17d88785df35b7440ed4f568003d24178f9ba834))
* **menu:** rename Item's showAlert to showNotificationDot ([7e4e69c](https://github.com/datacamp/waffles/commit/7e4e69c76f64e86a708dde72adf9be8cb7e9d51c))
* **menu:** truncate Item text content if it's too long ([83f91b5](https://github.com/datacamp/waffles/commit/83f91b545e01d740d394c870363fa066fed88aa5))
* **menu:** update spacing and sizing to reflact changes in desing ([31784f9](https://github.com/datacamp/waffles/commit/31784f931eead4b4e78055c961fda51907520731))
* **menu:** use context in Menu and Item ([0f22603](https://github.com/datacamp/waffles/commit/0f226032a14a20642c0c56145971d6e299c2d98c))
* **side-navigation:** adjust the size of category label for desktop ([56d3c8a](https://github.com/datacamp/waffles/commit/56d3c8afa7e681058eb702a64d682b0c2bbc7247))
* **side-navigation:** update subcomponent IDs prefixes ([1c30c65](https://github.com/datacamp/waffles/commit/1c30c65bb1db319dad7319b08daf49978c73ca50))
* **tokens:** add xxsmall fontSizes token ([011d1f0](https://github.com/datacamp/waffles/commit/011d1f0775919a8dd00a7a054ff4415da310a041))
* **tooltip:** get rid of Portal so it works better in tricky z-index situations ([0a5b7e6](https://github.com/datacamp/waffles/commit/0a5b7e66ecbfbd2e076f731ea2e923872043d447))
* **tooltip:** prevent Tooltip from 'stealing' trigger ref ([545aaec](https://github.com/datacamp/waffles/commit/545aaecef3c2311c790bc5a8f0f1948ad225ab42))
* **tooltip:** update tooltip internals ([459ed50](https://github.com/datacamp/waffles/commit/459ed50f15075f4fd56fd3ee42da8cae41f46a9c))


### Documentation Changes

* add asset component to docs site ([38d911a](https://github.com/datacamp/waffles/commit/38d911a9450821469d0e1270b6b59f4734ad2cd6))
* add bundle of svg assets for download on docs ([17c02bf](https://github.com/datacamp/waffles/commit/17c02bfbb7294ff110f64a7329b3529bd0e03e95))
* add datacamp branding assets to docs ([2f21ee1](https://github.com/datacamp/waffles/commit/2f21ee14dacd3f182e2128a47e29e90f1efe3736))
* add documentation for deepChildrenMap ([619c1bb](https://github.com/datacamp/waffles/commit/619c1bb6b5e42c020103e0bdfeab0bd3d2916da0))
* add examples for logomark and logo ([de2f563](https://github.com/datacamp/waffles/commit/de2f5638a3d8b20eb6fb095bb2809112f43240ac))
* add inline props documentation for Menu ([ddafa00](https://github.com/datacamp/waffles/commit/ddafa00a5018eaa2dae350a63f7051b6f27504c4))
* add link to branding assets on asset page ([a3cc445](https://github.com/datacamp/waffles/commit/a3cc44561a57d53d271b94ecbbaa4243f581a2c8))
* add logo and logomark generation scripts ([d721abd](https://github.com/datacamp/waffles/commit/d721abdc4ecd0dc5e0cd9660e7bf1d22dae137db))
* add Menu examples ([893b2f1](https://github.com/datacamp/waffles/commit/893b2f101e76e4be8fbf4d517fdf78a1fcb21973))
* add new generate assets script to docs ([aae36d7](https://github.com/datacamp/waffles/commit/aae36d71dfb90ccab98fe80193ecaf785982fc44))
* add playground and Button props table to Menu docs page ([ac718af](https://github.com/datacamp/waffles/commit/ac718af7981b440e9e74da188a58c12f9f1affd9))
* alphabetically order components in nav ([78fbe1a](https://github.com/datacamp/waffles/commit/78fbe1a5674f9c55743c821ef214c86871f0e278))
* **asset:** add asset type headings to page contents ([0a2bcf3](https://github.com/datacamp/waffles/commit/0a2bcf3b5849ebe300060ee93166fcbf71e34b45))
* **asset:** add brief behaviour overview to docs ([baa7952](https://github.com/datacamp/waffles/commit/baa79522fcb5366527b61d701730d5766a86e63f))
* **asset:** add link to asset type subheadings ([7e624a6](https://github.com/datacamp/waffles/commit/7e624a6866a8b8bdebe24b909b8a33097559610d))
* **asset:** group assets by type in grids ([de63af5](https://github.com/datacamp/waffles/commit/de63af5de3c823943c91b9b0fd3e6db882d177ee))
* **asset:** provide individual bundle downloads ([d4d2333](https://github.com/datacamp/waffles/commit/d4d2333eaee14f30fd5f00e932082cd79d1a6dcd))
* **asset:** update example and prop comment ([54cc3d6](https://github.com/datacamp/waffles/commit/54cc3d6fd78558be6ea982f84e0528cf46ff11d2))
* **asset:** update import example ([4d911d6](https://github.com/datacamp/waffles/commit/4d911d6a685c38f2c312eea7708bab97ae265cd6))
* change styling of brand download link ([3519b73](https://github.com/datacamp/waffles/commit/3519b73369b46f20be46f07b7f4ba4fe4d2f3190))
* **datacamp-branding:** add component docs ([7763dd2](https://github.com/datacamp/waffles/commit/7763dd257708f5520fb92c8517715dccda885eb1))
* fallback to type kind on type formatting ([324919d](https://github.com/datacamp/waffles/commit/324919d0dd9059bf9bd95c553fbaf0aaa7cb7c32))
* fix typos ([7737e89](https://github.com/datacamp/waffles/commit/7737e8938ebfc6a2f505d961081646d427a3f76e))
* fixed z-index of header ([9caf2e4](https://github.com/datacamp/waffles/commit/9caf2e487101d94111e97f99036d9e18493cebac))
* initial logo and logomark doc pages ([a025115](https://github.com/datacamp/waffles/commit/a02511528cd8669a633bd97d35b52b301d040bb0))
* order items alphabetically in overlay category of side nav ([6f683f6](https://github.com/datacamp/waffles/commit/6f683f6dcfc556f236d765a51a07aecefd323aaa))
* remove logomark and logo from repo docs ([9f24ac5](https://github.com/datacamp/waffles/commit/9f24ac5c7fda74733e56211e0dfed8b284ac31db))
* update asset grid formatting ([abeb83f](https://github.com/datacamp/waffles/commit/abeb83fb7f2b8ebfcc3429be0cde0da36004f68a))
* update brand and asset docs styling ([6aedd01](https://github.com/datacamp/waffles/commit/6aedd0160864888806ded117d6d906c5bf3566d9))
* update coding style docs ([bc8e8f9](https://github.com/datacamp/waffles/commit/bc8e8f99db10decf58db9110c93bab49a65aac47))
* update roadmap and navigation ([d221867](https://github.com/datacamp/waffles/commit/d22186748084ce0c1a4cf0daedf9955016633dfa))
* wrap some components with ErrorBoundary ([0c1bb31](https://github.com/datacamp/waffles/commit/0c1bb3101b58db4f63093f7ac34c11e3119eaee1))

### [1.8.1](https://github.com/datacamp/waffles/compare/v1.8.0...v1.8.1) (2022-04-28)


### Bug Fixes

* portal cleanup on unmount ([34701ba](https://github.com/datacamp/waffles/commit/34701ba9e03a1fe283178ee2b3434c4b0d814aca))

## [1.8.0](https://github.com/datacamp/waffles/compare/v1.7.0...v1.8.0) (2022-04-28)


### Core Changes

* **button:** add upgrade variant ([2983875](https://github.com/datacamp/waffles/commit/29838754f0fb2bf3cb0634fbbf1d3c75143178b8))
* **hooks:** add useMergeRefs hook ([dd4d875](https://github.com/datacamp/waffles/commit/dd4d875b8161b8ca2ab4c662986eaaf7339791c7))
* **icon:** add Plus icon ([d766f04](https://github.com/datacamp/waffles/commit/d766f04f5113101665a8a4423ed3d115ecf4c1d6))
* **icon:** add Refresh icon ([29db933](https://github.com/datacamp/waffles/commit/29db933ff2d03bfa78985e43ac3f4a44b8e2d1d0))
* **icon:** add RocketInverted icon ([7068168](https://github.com/datacamp/waffles/commit/7068168c222092d052d1fb524b200fd6c2b5afe7))
* **notification-card:** add upgrade style and fix border ([fed3f04](https://github.com/datacamp/waffles/commit/fed3f04431e96af9c7ae4532def83f476de226bd))
* **notification-card:** configure upgrade variant ([5a5391a](https://github.com/datacamp/waffles/commit/5a5391a703745086887a4cb17d2baf270593e8b0))
* **notification:** add upgrade variant and appropriate action button ([9ed46c4](https://github.com/datacamp/waffles/commit/9ed46c47d4eee7e3e647cee1bc4bee622a141e42))
* **portal:** add id to portal to optionally group related elements ([ba44702](https://github.com/datacamp/waffles/commit/ba44702a30a9fe98d053260dac64452f1cca6528))
* **portal:** cleanup DOM on unmount ([7db217d](https://github.com/datacamp/waffles/commit/7db217d0a801534f919ec21a3a27e791ee9401d5))
* **tooltip:** update Tooltip internals ([318a77e](https://github.com/datacamp/waffles/commit/318a77e8eed24c5923d12dc7b0358ed9f242a05d))


### Documentation Changes

* add info about upgrade Button ([cf55fe3](https://github.com/datacamp/waffles/commit/cf55fe3355c0073e4f1625aa32d246f5bcbe1c96))
* add upgrade Notification examples ([5f26f1f](https://github.com/datacamp/waffles/commit/5f26f1f32a51966d9272b1af0cd76f8fb4c1698e))
* fix typo ([4905e7f](https://github.com/datacamp/waffles/commit/4905e7f7597cbc0a1e9ff74fc4d571cd79f4321f))
* mention grid demo ([539d1f3](https://github.com/datacamp/waffles/commit/539d1f37df7121146b2ec3c963bb7028526ab319))
* update hooks docs with useMergeRefs ([89ab524](https://github.com/datacamp/waffles/commit/89ab52457ee4f3d92b0c7cbba8a930221bb9e572))
* update navigation ([0cccc3b](https://github.com/datacamp/waffles/commit/0cccc3bb63efdbe0c49ded4d35bc3b9430917200))

## [1.7.0](https://github.com/datacamp/waffles/compare/v1.6.0...v1.7.0) (2022-04-13)


### Core Changes

* **notification-card:** adjusted decor style ([bb32799](https://github.com/datacamp/waffles/commit/bb32799a83e636ae91019579b2e95d32e8c6d7c7))
* **tooltip:** update position on initial render ([6734cb5](https://github.com/datacamp/waffles/commit/6734cb5b2bdbe966b26258dbe0e89954aa5b5ceb))
* **tooltip:** use floating-ui under the hood ([8b81d76](https://github.com/datacamp/waffles/commit/8b81d7649b1916f190ff4d205c3f5918eb667ce5))

## [1.6.0](https://github.com/datacamp/waffles/compare/v1.5.0...v1.6.0) (2022-04-11)


### Core Changes

* **button:** update plain variant inverted text color ([73e5849](https://github.com/datacamp/waffles/commit/73e58491f2c45320e8a7e3431116a26f74348873))
* **content-container:** removed noSidebar prop ([1392f66](https://github.com/datacamp/waffles/commit/1392f66badb50df48fcc719462ad68872ed2f3b7))
* **content-container:** simplify how it works across various breakpoints ([3b0f392](https://github.com/datacamp/waffles/commit/3b0f392a168ff9df7e5d3df281a8c34dd0cd33e0))
* **error-boundary:** add fallback prop for custom error notifications ([1f72cb8](https://github.com/datacamp/waffles/commit/1f72cb8dda7d307800cd18685697a40a048464df))
* **error-boundary:** implement custom ErrorBoundary component ([aa8ae21](https://github.com/datacamp/waffles/commit/aa8ae215cd889ca8ec3445d39b32ace9e2f3f3df))
* **link:** update inverted link color ([aa8bf81](https://github.com/datacamp/waffles/commit/aa8bf81bda86896fc1efd86cc22437008a13a1d1))
* make modals overlay slightly darker ([b7b3606](https://github.com/datacamp/waffles/commit/b7b3606f8cf1b68c422e0f8ae0ab91080b7e60fa))
* **notification-card:** baseline for various notification implementations ([7d102a7](https://github.com/datacamp/waffles/commit/7d102a7c57da8461de8fab38305cee4d4016ef48))
* **notification:** add action button slot ([2fa923b](https://github.com/datacamp/waffles/commit/2fa923b0e7cdb8b70c14b8ccf88ae00bf299a5a4))
* **notification:** add ActionButton subcomponent ([4f123f0](https://github.com/datacamp/waffles/commit/4f123f0b83f552b0386007d14e9ab0035fe2bd1d))
* **notification:** add closeable flag to show close button ([4540bf3](https://github.com/datacamp/waffles/commit/4540bf3f0dc6f4657b1c0b0bf88debbc515ad6f9))
* **notification:** add CloseButton internal component ([43e0a4c](https://github.com/datacamp/waffles/commit/43e0a4ca7226f974f1f2540e602f68b210d0c1b3))
* **notification:** add hook to determine internal layout ([4ad0442](https://github.com/datacamp/waffles/commit/4ad0442e5cab7ae4f1d1939d68dd13fa69b58f31))
* **notification:** add Icon internal component ([101287e](https://github.com/datacamp/waffles/commit/101287e10e3e073a7f0f65f36a2406d215fe5fa9))
* **notification:** add inverted style ([5bd9c2e](https://github.com/datacamp/waffles/commit/5bd9c2ea967dc98610e4aafe4d7451103997dee0))
* **notification:** add simple fade out animation when it's closed ([0ad4d99](https://github.com/datacamp/waffles/commit/0ad4d998ae7aad75a2745d6a65d9a63826a9b2e8))
* **notification:** add success, error, and warning variant ([bbbf0a8](https://github.com/datacamp/waffles/commit/bbbf0a8d338999380c073864b334471046e7d2dd))
* **notification:** implement basic default Notification ([b583cd9](https://github.com/datacamp/waffles/commit/b583cd938538c9512b114f67f1e5713940ff8fe6))
* **notification:** pass inverted prop to action ([bc41d1b](https://github.com/datacamp/waffles/commit/bc41d1bc0f6a52680f49bda735b046c3280297f0))
* **notification:** pass through remaining props to notification wrapper ([349dacc](https://github.com/datacamp/waffles/commit/349dacce6565991d1051e6f10d1a45746d998506))
* **notification:** separate variant display logic from content ([8a14566](https://github.com/datacamp/waffles/commit/8a14566d3eec575c0d42e3821044c62af31dcdff))
* **notification:** small props and styles adjustments ([ecc1867](https://github.com/datacamp/waffles/commit/ecc1867b201b70445913c108360d27b9d242c767))
* **side-navigation:** mobile nav appears below medium breakpoint ([1a69100](https://github.com/datacamp/waffles/commit/1a691000ab5b4a42eb24c60d935f62a903f09bfd))
* **toast:** use NotificationCard under the hood ([d73d454](https://github.com/datacamp/waffles/commit/d73d454f7275f59db4aced3a31baa9fa7231c3d8))


### Documentation Changes

* add ErrorBoundary fallback ocs and examples ([4f72627](https://github.com/datacamp/waffles/commit/4f72627d5d7969e988a07b89772c6d9fa13337f1))
* add inline props docs for ErrorBoundary ([c97df1c](https://github.com/datacamp/waffles/commit/c97df1cd845344370b0576036c322af7883e24d1))
* add Notification inline props documentation ([de5cda9](https://github.com/datacamp/waffles/commit/de5cda9aaf1aaacea1755afc5fbc246317230dab))
* add Notification page with playground and examples ([bf5f8c6](https://github.com/datacamp/waffles/commit/bf5f8c675f12988c974affd2b0df0d819fdaa23f))
* create ErrorBoundary docs page ([98f03d6](https://github.com/datacamp/waffles/commit/98f03d6db500b5458d1694ad8429f1a3b6990f74))
* update ContentContainer documentation ([fd1d845](https://github.com/datacamp/waffles/commit/fd1d845910826e8fbc02129d8a938ebc79690f8a))
* update documentation to reflect SideNavigation changes ([40fa7ba](https://github.com/datacamp/waffles/commit/40fa7ba82d5e319ccc1642ef60f4e8a4e807182a))
* update ErrorBoundary props docs ([77b4952](https://github.com/datacamp/waffles/commit/77b4952cb3ce5224057fff0db49a2f8e7c81c353))
* update roadmap ([4e69d79](https://github.com/datacamp/waffles/commit/4e69d79cf021a4a1ee58cdd675c355a4ad175289))
* update roadmap ([96df017](https://github.com/datacamp/waffles/commit/96df0173271729d0a241b58747bf5ccb8fd62478))
* update roadmap and navigation ([70935a1](https://github.com/datacamp/waffles/commit/70935a12c199b1af45ee282183d6cb5dcfbf1291))

## [1.5.0](https://github.com/datacamp/waffles/compare/v1.4.0...v1.5.0) (2022-03-09)


### Bug Fixes

* **dialog:** hide scrollbars on Windows ([4a3ce45](https://github.com/datacamp/waffles/commit/4a3ce456bb035beec60814e05291b5f04eef3616))
* **sidebar:** context error handling ([6b9a9ca](https://github.com/datacamp/waffles/commit/6b9a9ca813f0cbb4522e0d4c911161a19f78af74))
* **tabs:** hide scrollbars on Windows ([645fd33](https://github.com/datacamp/waffles/commit/645fd3399e70dcff8c4f65a02149ded6e236fef6))
* **text-area:** very long string breaking autoGrow ([62d03c8](https://github.com/datacamp/waffles/commit/62d03c8504267545bb1e336a0cfbdc84ed5cb5f8))


### Documentation Changes

* add Toast documentation page ([2835861](https://github.com/datacamp/waffles/commit/283586180b7f680d3744bcd6a1402400b7315f06))
* add Toast examples and playground ([1e18cd9](https://github.com/datacamp/waffles/commit/1e18cd924a575e3954d8bbe93798e671d8f425d6))
* add useIsomorphicLayoutEffect and useCallbackRef overview ([e7cc082](https://github.com/datacamp/waffles/commit/e7cc082bd7b70d41025af925624dac812f02a9b9))
* fix typo ([fa54823](https://github.com/datacamp/waffles/commit/fa548239742bba69694694dc22d52babb9d3e6de))
* hide code samples scrollbars on Windows ([95f04c0](https://github.com/datacamp/waffles/commit/95f04c090622add41c60d9ce7640118af3d540b8))
* update component names in links between doc pages ([d200bf4](https://github.com/datacamp/waffles/commit/d200bf4ca17a112d1271f20a34b24da74ee9136b))
* update FormFiled documentation ([eff5cea](https://github.com/datacamp/waffles/commit/eff5ceab855b5e2a17a55fd1f28a5f0db36b7d90))
* update navigation and roadmap ([d30508e](https://github.com/datacamp/waffles/commit/d30508e659e96b81ce128cacb98649508afacfee))
* update TextArea documentation ([0af7f9d](https://github.com/datacamp/waffles/commit/0af7f9d3b63b8b58cbc29ac399c9ea9e70002829))


### Core Changes

* **badge:** update height for each size ([e44660a](https://github.com/datacamp/waffles/commit/e44660a045dff9e9da6a523b0729d1ea3d22536f))
* **form-field:** add an option to disable required indicator completely ([6d17fff](https://github.com/datacamp/waffles/commit/6d17fff5ae7538c5231f6ee6cbaab283fa5c56eb))
* handle animation keyframes in more explicit way ([b3790ab](https://github.com/datacamp/waffles/commit/b3790aba95836581386f047cd0ef4f7310d49187))
* **hooks:** add useCallbackRef to persist functions between rerenders ([83fc02f](https://github.com/datacamp/waffles/commit/83fc02f6ad378314ff8bdefed79e3f1742f5a433))
* **hooks:** useCallbackRef allow to pass deps array ([a36962a](https://github.com/datacamp/waffles/commit/a36962acca01400b32f39f2326c95ec7fdf152d2))
* **icon:** add Integration icon ([4c74ac6](https://github.com/datacamp/waffles/commit/4c74ac61f908e1ba05a7f1e5cb63ef1f47ac4167))
* **text-area:** add optional character count indicator ([80974f8](https://github.com/datacamp/waffles/commit/80974f8d2bf0b4418f295f604a6dec336b7f7171))
* **text-area:** decrease the size of character counter ([964aca4](https://github.com/datacamp/waffles/commit/964aca4edc828cfd3484835db13b9996eafdf2f0))
* **toast:** add close button and animations ([14996ff](https://github.com/datacamp/waffles/commit/14996ff609f79c6cb4bd143b22ebd057617a9a6c))
* **toast:** add global auto hide configuration for ToastProvide ([9ba206e](https://github.com/datacamp/waffles/commit/9ba206e287c098ff2552a544c1d650601cad4947))
* **toast:** add logic to handle Toast closing and animations ([4ae738a](https://github.com/datacamp/waffles/commit/4ae738a7b11463585fd0ae9a00f38f056c457d08))
* **toast:** add offset to adjust toasts container top position ([32445a8](https://github.com/datacamp/waffles/commit/32445a855a63209e5250315c7e73523cd0b9472c))
* **toast:** cleanup of ToastProvider ([e3c6548](https://github.com/datacamp/waffles/commit/e3c654837a1375cfa14a58cd71dc6f1101e0615a))
* **toast:** collapse Toast when closed ([18fae6f](https://github.com/datacamp/waffles/commit/18fae6fea1550c8bc6e5f94cccb0dd15381a7b19))
* **toast:** create container for toasts ([9e6c545](https://github.com/datacamp/waffles/commit/9e6c545271c4ec6be8aa2e74006d714e99430ff2))
* **toast:** extract Toast visual content to separate component ([52a9bc7](https://github.com/datacamp/waffles/commit/52a9bc732a90e0ed9bd0fa39b78ee968d0d863a1))
* **toast:** implement basic Toast component ([7f0cf74](https://github.com/datacamp/waffles/commit/7f0cf74a8c5458eeb789e1685bbba9dc3caa9d38))
* **toast:** implement context provider and hook for managing toasts ([a541cec](https://github.com/datacamp/waffles/commit/a541cec3a15a0cf948949c0597c60672f5b817ce))
* **toast:** implement hook to get Toast height ([43f5373](https://github.com/datacamp/waffles/commit/43f537314e1f9c00661fe44885772b0be6b8d8b9))
* **toast:** make it display correctyl on mobile ([5e21f96](https://github.com/datacamp/waffles/commit/5e21f963760dcf88fdbbaa6f8ca141a2287c53bd))

## [1.4.0](https://github.com/datacamp/waffles/compare/v1.3.0...v1.4.0) (2022-02-16)


### Bug Fixes

* **modal:** remove redundant call in useScrollPosition hook ([45c2585](https://github.com/datacamp/waffles/commit/45c258510d84dcd14bd8f53e04c33804186d4f61))
* **side-navigation:** remove scroll lock ([7829ddc](https://github.com/datacamp/waffles/commit/7829ddcb21cea60ce9d182f3c74a8ce84d169a79))


### Core Changes

* **alert-dialog:** rename AlertModal to AlertDialog ([85edf51](https://github.com/datacamp/waffles/commit/85edf51411e49aca4ff4b853a70fa7ff989b74a4))
* **alert-modal:** implement AlertModal and its subcomponents ([2061f94](https://github.com/datacamp/waffles/commit/2061f94273dfe74bf4ccfa5e27e2dc457c28e972))
* **badge:** type of Badge is now defined by variant not by color ([b606ad7](https://github.com/datacamp/waffles/commit/b606ad7b626df327205cf3b8821d63ab60384589))
* **dialog:** rename Modal to Dialog and clean up animations ([049ea34](https://github.com/datacamp/waffles/commit/049ea34232589b9f013e8555fe6eb34ae59497a9))
* **drawer:** implement Drawer component ([1cdf760](https://github.com/datacamp/waffles/commit/1cdf7600d51e845fd71b9b2eb63be9b5f290a09e))
* **drawer:** implement Drawer component ([9716206](https://github.com/datacamp/waffles/commit/9716206fc886f1cf7268d28c1deb90c8a4f6bbd8))
* **drawer:** make panels behave nicely on iOS ([f1465c9](https://github.com/datacamp/waffles/commit/f1465c95d06d148d7db97e79950268443d46669b))
* **drawer:** update drawer panel a11y ([782cc43](https://github.com/datacamp/waffles/commit/782cc433b6091ee625a9bce8c010ec458a2111a6))
* **form-field:** add FormField utility component to enhance inputs ([9b8ba99](https://github.com/datacamp/waffles/commit/9b8ba99b48a56a28ca45b5182e85cd91f78b531b))
* **icon:** add Diamond icon ([7abc048](https://github.com/datacamp/waffles/commit/7abc048683f0b35cc24a03be01dc55161949790d))
* **icon:** add Publish icon ([7afa4e2](https://github.com/datacamp/waffles/commit/7afa4e2a87613361f174625321e73ed637435ae5))
* **icon:** add xlarge and large size ([dd53f19](https://github.com/datacamp/waffles/commit/dd53f190fe7f8a21ca8d6aa36780018629d17db3))
* **input:** simplify Input to play nicely with FormField ([38dcd11](https://github.com/datacamp/waffles/commit/38dcd11043eee0bd8d41ede1ac5f36974bf84f88))
* **modal:** add animation on dismiss ([204a760](https://github.com/datacamp/waffles/commit/204a760aa238d608adfc27ab67214f70d0ef68cf))
* **modal:** add body subcomponent ([828bdc2](https://github.com/datacamp/waffles/commit/828bdc22dae18d99d2ca893af97178005be9f308))
* **modal:** add close button ([ba79ed5](https://github.com/datacamp/waffles/commit/ba79ed5f720a785f136fe3f86f78342a184946ce))
* **modal:** add header and footer subcomponents ([1212d74](https://github.com/datacamp/waffles/commit/1212d74eae515bb0bc49e949d573fe8503098c03))
* **modal:** add overlay ([bc2c09e](https://github.com/datacamp/waffles/commit/bc2c09ef6178b3b7e6ab227b7f6661a7b79d7569))
* **modal:** add some wiggle room to isAtBottom calculations in scroll hook ([a22b3cf](https://github.com/datacamp/waffles/commit/a22b3cfb41c83f8ab4d7c30403b2c4eff6449d2b))
* **modal:** button subcomponent with some QOL additions ([7502f62](https://github.com/datacamp/waffles/commit/7502f625f1fa08365cbfee0a2a0e71abbb3e3762))
* **modal:** focus lock modal content ([d2e1d16](https://github.com/datacamp/waffles/commit/d2e1d169f2fe3eaac3ebbfc3443b33dd03868cd9))
* **modal:** implement dialog and its wrappers ([e6380d0](https://github.com/datacamp/waffles/commit/e6380d027b2624eab25bc6afca0439b18e247804))
* **modal:** implement hook managing modal body scroll position ([d8df4ca](https://github.com/datacamp/waffles/commit/d8df4ca2e4030c1480b44363b15e515d3e7caf12))
* **modal:** make close button and overlay more extensible ([ac2ad41](https://github.com/datacamp/waffles/commit/ac2ad4160862f63dae962da01ca864552407d452))
* **modal:** make modal content scrollable with fixed footer and header ([327109c](https://github.com/datacamp/waffles/commit/327109ce5aeae749340643ae214558e094f1bc7e))
* **modal:** make subcomponents more extensible ([1aa2fe9](https://github.com/datacamp/waffles/commit/1aa2fe9ed1e7876166f43f9db07f8acdee2c1ed3))
* **modal:** prevent footer and header from shrinking ([2b256d2](https://github.com/datacamp/waffles/commit/2b256d248ebe52223fa1bdb23408c9b5d9409f33))
* **modal:** put together basic modal and add animation keyframes ([2d90ab6](https://github.com/datacamp/waffles/commit/2d90ab6f5e818ee734963687b0f7b68dd09d5af5))
* **modal:** show shadow scroll indicators when content is long ([be4c89a](https://github.com/datacamp/waffles/commit/be4c89ae37a49eddcbb5ae4b13e7bebec127a16f))
* **overlay:** add internal Overlay component ([907aabc](https://github.com/datacamp/waffles/commit/907aabc9850dee90a9049593cefeab69e6228835))
* **select:** simplify Select to play nicely with FormField ([e0468a7](https://github.com/datacamp/waffles/commit/e0468a727621b8dd2ad392b58b7ccb06c76204b5))
* set aria-invalid when Input, TextArea, and Select has error ([47fe36e](https://github.com/datacamp/waffles/commit/47fe36e7c2558367795e36134582f695e3ec1567))
* **side-navigation:** increase size of close button icon ([a07b346](https://github.com/datacamp/waffles/commit/a07b346d9a93e93c5333de8338a749bd47ef47f2))
* **side-navigation:** update new badge ([1a9f385](https://github.com/datacamp/waffles/commit/1a9f3851a1e01947ccc164bbd9dad4c41528fb3c))
* **side-navigation:** use Overlay and streamline animation keyframes ([f9d4d85](https://github.com/datacamp/waffles/commit/f9d4d856f2c82304eb7041c69d2ea73089c584c2))
* **tabs:** update spacing on mobile ([81a985a](https://github.com/datacamp/waffles/commit/81a985a71f15244a1ea28434cf8a0468f92aba4d))
* **text-area:** simplify TextArea to play nicely with FormField ([c90d80f](https://github.com/datacamp/waffles/commit/c90d80f458e615167b3d90a7fbc79e5bbebf7396))
* **tooltip:** decrease z-index ([9dc625d](https://github.com/datacamp/waffles/commit/9dc625ddb5762a407b47efe651dc070dbb86ea57))
* **use-animate-transition:** add hook to handle CSS exit animations ([a09ddaf](https://github.com/datacamp/waffles/commit/a09ddaf58f054189609893420be9730ceca9c45d))


### Documentation Changes

* add a11y note to Input, TextArea, and Select ([abce7bf](https://github.com/datacamp/waffles/commit/abce7bfa368282b6e80ae17be99722b7fe27b25b))
* add accessibility notes to modal components ([1e8a7cf](https://github.com/datacamp/waffles/commit/1e8a7cf1c8909b1d2a914594a688de34b0301083))
* add AlertDialog examples ([b0a77b4](https://github.com/datacamp/waffles/commit/b0a77b44b8649fc16afeac1ead547a670e8ff5ff))
* add Dialog examples ([5582027](https://github.com/datacamp/waffles/commit/55820271f5e65b4d923e96ddfb33d904687c9e83))
* add dodumentation pages for modal components ([9c0774d](https://github.com/datacamp/waffles/commit/9c0774d49991591d08e7f1da3b26d411a9ce880a))
* add Drawer examples ([3b95783](https://github.com/datacamp/waffles/commit/3b9578300739ee2fc8b64337ad8f5e8f8b9234b2))
* add FormField basic documentation page ([545643a](https://github.com/datacamp/waffles/commit/545643a1002d6446cfe1f24dd8977693e1d852e2))
* add FormField examples ([41b6e14](https://github.com/datacamp/waffles/commit/41b6e14dbdc84ef626f34b722c52aac9ec709188))
* add FormField inline props docs ([c63555c](https://github.com/datacamp/waffles/commit/c63555ceda351da5d0d4226bbf22df23d0ae64b7))
* add info about strong and em to Paragraph ([192ca33](https://github.com/datacamp/waffles/commit/192ca3368b1bc9f40efe55990707f0f050cfa5b7))
* add new components to navigation ([7cf1176](https://github.com/datacamp/waffles/commit/7cf1176096801092ea847ac58abcc1678d61c37d))
* add tooltip indicator to inline element example ([0debd1a](https://github.com/datacamp/waffles/commit/0debd1a5e6cf69fc205fc8e4f55b9b2e8357d539))
* document useAnimateTransition hook ([180dcb5](https://github.com/datacamp/waffles/commit/180dcb5cc9ecb70b6cca1f14bdf3f2318774b953))
* fix SideNavigation example ([f538dec](https://github.com/datacamp/waffles/commit/f538decf1682bc54a66cee7ee9c97cfe641373ea))
* inline props docs for AlertDialog ([dea4e00](https://github.com/datacamp/waffles/commit/dea4e0092b1f5dfe8e2bf3d6df3f931a6f85547b))
* inline props docs for Dialog ([be838db](https://github.com/datacamp/waffles/commit/be838dbc8db06fc8be2860ba08006908525dd5db))
* inline props docs for Drawer ([45f224f](https://github.com/datacamp/waffles/commit/45f224f55d710a0c194d07f5250b5620dbfa0cd2))
* make FormField and Select notes more precise ([24f4e63](https://github.com/datacamp/waffles/commit/24f4e63430ced796e448455d837117db7db1ad60))
* update Badge documentation ([0259d06](https://github.com/datacamp/waffles/commit/0259d06a85b3d947eaff10190cced22b65befa82))
* update CodePreview horizontal scrolling for small devices ([73f47a5](https://github.com/datacamp/waffles/commit/73f47a5ce1fd94779f50d0bd75ebbf08927fa779))
* update icon docs and examples ([11c310e](https://github.com/datacamp/waffles/commit/11c310e8eb0c171811ce7bac346a5f40172f4e66))
* update roadmap ([2ea0874](https://github.com/datacamp/waffles/commit/2ea08746eba040b832903d8fe625f6628d0277a2))
* update Select and TextArea documentation ([38055c7](https://github.com/datacamp/waffles/commit/38055c7456d0d4ac0704dbbebe4be86800090f4d))
* update size of hamburger menu and GitHub link ([17b25bf](https://github.com/datacamp/waffles/commit/17b25bf468a2c27d0c3a4e09635632012a4758ff))

## [1.3.0](https://github.com/datacamp/waffles/compare/v1.2.0...v1.3.0) (2022-01-24)


### Bug Fixes

* **side-navigation:** remove overeager element type checks ([1f0c51c](https://github.com/datacamp/waffles/commit/1f0c51c89c6711fa0287d5935e7afa1e27be14ae))
* **side-navigation:** update animated sidebar layout ([2fb01ac](https://github.com/datacamp/waffles/commit/2fb01ac43fb123a440f3da1c2d086fe410695c5f))


### Core Changes

* add Image ([8f585e9](https://github.com/datacamp/waffles/commit/8f585e95d424d5586b320ef61dcb62f3d19a3d8c))
* **icon:** add Calendar ([f2414c2](https://github.com/datacamp/waffles/commit/f2414c2f06fea12a13615e13b96137dec26af1d5))
* **icon:** rename Picture to Camera ([cb91c22](https://github.com/datacamp/waffles/commit/cb91c22d4c2eaf3fb9179119b25e072bad5c7099))


### Documentation Changes

* add Accessibility page, other minor updates ([ae8795b](https://github.com/datacamp/waffles/commit/ae8795b65a5a46f52b444a9d4d91012fdae6da5a))
* fix page header position in Safari ([ceea161](https://github.com/datacamp/waffles/commit/ceea161bb5718c4185d5e05342fd80118a045f71))
* mention useMediaQuery on tokens page ([6990196](https://github.com/datacamp/waffles/commit/6990196b99a00061dc242453953372d8a1a6ac34))
* update SideNavigation docs with more exaples ([e6094c2](https://github.com/datacamp/waffles/commit/e6094c29c9a88b5268852a821828c32f655fe5b1))
* updated pages layout to properly handle mobile nav ([3b1c873](https://github.com/datacamp/waffles/commit/3b1c873db694c86df41c9456b2dd00dc8dbb1e11))

## [1.2.0](https://github.com/datacamp/waffles/compare/v1.1.0...v1.2.0) (2022-01-20)


### Bug Fixes

* item text positioning ([4363b67](https://github.com/datacamp/waffles/commit/4363b67aab4d14cdce27166507285f1a1cc17ca3))


### Core Changes

* **badge:** add badge styles ([2358d81](https://github.com/datacamp/waffles/commit/2358d8108ef66f5c1225ba0d7056ab7f4ea54fbf))
* **badge:** implement Badge component ([987043d](https://github.com/datacamp/waffles/commit/987043d19c510bc7c97f9d5adbb0a94294088a4f))
* **badge:** set same height for all sizes ([dafb5c0](https://github.com/datacamp/waffles/commit/dafb5c0a8a5dd55354aeb89c337856dd510db0ae))
* **badge:** truncate label when it exceeds max width ([e964891](https://github.com/datacamp/waffles/commit/e9648912fbe2713c1199b0a485d017278ac55104))
* **icon:** add regular and inverted Verified icon ([cd1ee89](https://github.com/datacamp/waffles/commit/cd1ee89531e0c1226db51518a32008b1bf1d216b))
* **media-query:** update query names to be clearer ([15522fc](https://github.com/datacamp/waffles/commit/15522fc8732942df2831d50201635de8cc5953df))
* **side-navigation:** add category divider ([c4050fd](https://github.com/datacamp/waffles/commit/c4050fd2b9da9d7fa831ecc7437bafe4ac94a163))
* **side-navigation:** add mobile close button ([673977a](https://github.com/datacamp/waffles/commit/673977ad1ece5203a0edb8732f5d2149bd8511b9))
* **side-navigation:** add mobile sidebar and overlay styles ([6b18798](https://github.com/datacamp/waffles/commit/6b187985dd48581d4b9ff3ef3673db8beee16076))
* **side-navigation:** add new indicator badge ([cfe8df0](https://github.com/datacamp/waffles/commit/cfe8df048454febfd0b63684829dd4e540a5f670))
* **side-navigation:** add right icon to item ([abf071e](https://github.com/datacamp/waffles/commit/abf071e2b789fa52ed6a52325bde76c6bc286631))
* **side-navigation:** add subtle border to sidebar and close button ([8718113](https://github.com/datacamp/waffles/commit/871811394df85d2e611523650cf7e28c6b5b1d8b))
* **side-navigation:** close mobile nav if item is link ([a4cf29c](https://github.com/datacamp/waffles/commit/a4cf29c2ae05e52e91d366da2a8ea8df72d4687d))
* **side-navigation:** close mobile nav when item is clicked ([c72cb4d](https://github.com/datacamp/waffles/commit/c72cb4dd537958aa9ddc0367454e2d984c4c463e))
* **side-navigation:** configure animations for mobile sidebar ([eb0b943](https://github.com/datacamp/waffles/commit/eb0b94397ae097f2cb4004db1b49ec4faec52019))
* **side-navigation:** create hook to add delay to component unmount ([77be294](https://github.com/datacamp/waffles/commit/77be2949c7bab624a643da986c2a6657b209d10f))
* **side-navigation:** display optional Link icon ([c991ce3](https://github.com/datacamp/waffles/commit/c991ce3d1aae8363ea2041f9efd2643df15ef0a3))
* **side-navigation:** enhance active item with aria-current attribute ([f6b844b](https://github.com/datacamp/waffles/commit/f6b844bdcf2589a5265e49a9ab65aa93890a19b2))
* **side-navigation:** extract mobile sidebar to speparate component ([5f551c2](https://github.com/datacamp/waffles/commit/5f551c2b2698ae7dc8dceda79559d8909dcb4f3e))
* **side-navigation:** extract styles to separate file ([0f38e2a](https://github.com/datacamp/waffles/commit/0f38e2a293ee55eb8837fbd74fcd1f070a085270))
* **side-navigation:** implment side nav base ([139a67f](https://github.com/datacamp/waffles/commit/139a67f6d533f7c40000f4a00c80368fa2d261e4))
* **side-navigation:** improve group of links a11y ([db5f987](https://github.com/datacamp/waffles/commit/db5f9870c250f5bcd399c9d37158a8eae61e33f8))
* **side-navigation:** prevent scroll on mobile with no lib ([a60503e](https://github.com/datacamp/waffles/commit/a60503ed1b5a590fe7633d3d210012f1e320622f))
* **side-navigation:** prevent scrolling on mobile ([9bd6f3b](https://github.com/datacamp/waffles/commit/9bd6f3bb8f1b2e13b9aaf70b6e6a906e1f94827a))
* **side-navigation:** prevent scrolling when its open ([27aefa4](https://github.com/datacamp/waffles/commit/27aefa484797ada5f07be1221a679ca38b1f1859))
* **side-navigation:** simplify Link styles to accomodate for long content ([84deb23](https://github.com/datacamp/waffles/commit/84deb239b08a74380b94431f4708c016bba8b9cc))
* **side-navigation:** small and medium size of item and subcategory ([a4653ef](https://github.com/datacamp/waffles/commit/a4653ef94bb7262a050761f9a1e38c198286d2d8))
* **side-navigation:** specify animation keyframes for mobile sidebar ([0447dc6](https://github.com/datacamp/waffles/commit/0447dc6d3907c4d672ebe8ccf978f1ede1902412))
* **side-navigation:** subcategory may act as a link ([f37a81f](https://github.com/datacamp/waffles/commit/f37a81f32334dfd337b86fb2fd75b9bf0a2590a9))
* **side-navigation:** update elements colors ([efd409a](https://github.com/datacamp/waffles/commit/efd409adeff83ee5a90ee4e34e6615b9bf4cf0ee))
* **side-navigation:** update height of sidebar wrapper ([55af2ca](https://github.com/datacamp/waffles/commit/55af2cae6f4f702da2611cd8a5e6853404cd39c1))
* **side-navigation:** update hitbox and font sizes for mobile ([fdbc311](https://github.com/datacamp/waffles/commit/fdbc3112ba534f33d3d88344c50d60af1463f569))
* **side-navigation:** update Item and Subcategory to be more consistent ([312ba88](https://github.com/datacamp/waffles/commit/312ba881004aa790ddcd48682ec57a5667ac0fb8))
* **side-navigation:** update the structure to make it more flexible ([3bafa1c](https://github.com/datacamp/waffles/commit/3bafa1ceb7679e39333b40f9ffa7e05ea7b0690f))
* **side-navigation:** use badge component for new indicator ([c435f91](https://github.com/datacamp/waffles/commit/c435f9105df03a6804ed19d758630c22de8eed7f))
* **side-navigation:** use Portal to render mobile nav ([beeac7c](https://github.com/datacamp/waffles/commit/beeac7c7d843e5e9ce39ac26dafe00a28c93dcc8))
* **use-isomorphic-layout-effect:** hook to fix useLayoutEffect warning ([b4042db](https://github.com/datacamp/waffles/commit/b4042db2abcad48b682d0011931e08edb496a612))
* **use-media-query:** add useMediaQuery hook for breakpoints from tokens ([af6796d](https://github.com/datacamp/waffles/commit/af6796d0a7f852dcced12f54d7f55fea396f249a))
* **use-media-query:** make conditional breakpoints names more clear ([d4bdeca](https://github.com/datacamp/waffles/commit/d4bdeca90492f25b563e94b80957064c791071c1))


### Documentation Changes

* add Badge documentation page ([9a340de](https://github.com/datacamp/waffles/commit/9a340de41f3e7e4933e4787b3d2b4e42ec8d0438))
* add Badge examples ([c6303fc](https://github.com/datacamp/waffles/commit/c6303fcd5a544d33291f651eba46c3852570be7e))
* add Badge props documentation ([65ed02b](https://github.com/datacamp/waffles/commit/65ed02bacb6840e105bccf57907114517081fc59))
* add inline props documentation for SideNavigation subcomponents ([28e91ee](https://github.com/datacamp/waffles/commit/28e91ee5cc39807e62a4976a5271b00702f2739f))
* add SideNavigation documentation page ([f966f54](https://github.com/datacamp/waffles/commit/f966f54f9092e4abb5a9d4a4fd217db111ac09eb))
* add SideNavigation examples ([98d8819](https://github.com/datacamp/waffles/commit/98d881969e5ada8020fb8cbc9399b25de8e71d69))
* add updated NavigationItem component ([ce35663](https://github.com/datacamp/waffles/commit/ce356636fed72e3c90f4dd76c9f5669139933cf5))
* add useMediaQuery example ([4578d1e](https://github.com/datacamp/waffles/commit/4578d1e2107ddd2ecbcf5d24aa11a901b0f17311))
* add useMediaQuery hook documentation page ([68bac9a](https://github.com/datacamp/waffles/commit/68bac9a408480b3a2b09781743bf8d2e62306e07))
* fix ContentContainer imports ([6fd907b](https://github.com/datacamp/waffles/commit/6fd907b9ff4f2edecff72169e231a4743f4a2b03))
* fix media query hook breakpoint ([14dbf1c](https://github.com/datacamp/waffles/commit/14dbf1c68007d202b59263c134bdbdcbcd2f213c))
* implement navigation using own SideNaviagtion ([f139472](https://github.com/datacamp/waffles/commit/f139472aa74d12303ada90489c4674839aeccfce))
* make best practices responsive ([820e184](https://github.com/datacamp/waffles/commit/820e184982febae41aa9536d48288bab32f40f7e))
* make cards on landing page responsive ([b36687f](https://github.com/datacamp/waffles/commit/b36687fd3de1839565f074e40bc6e4c2ee9a2c2f))
* make page header and layout more responsive ([b62f470](https://github.com/datacamp/waffles/commit/b62f470cc40e01854d535cbd43c64c0b31c867c0))
* make TableOfContents responsive ([b410fa6](https://github.com/datacamp/waffles/commit/b410fa644932a4f24c68ad0df0e71038b9445b7c))
* minor updates for useId and Portal ([21c2fe4](https://github.com/datacamp/waffles/commit/21c2fe46e81adbe5fa2e3d54697c21bd209c4e40))
* update mediaQuery documentation ([017c72d](https://github.com/datacamp/waffles/commit/017c72daa51cb31568ba773d7e4708a8a4ba43bb))
* update roadmap and component status ([a322d14](https://github.com/datacamp/waffles/commit/a322d147d005db295bc93b123b3221276a40a788))

## [1.1.0](https://github.com/datacamp/waffles/compare/v1.0.0...v1.1.0) (2021-12-16)


### Bug Fixes

* incorrect image size on landing page card ([dbb043c](https://github.com/datacamp/waffles/commit/dbb043cd77584d54d87999f83af25a80b6a8254c))


### Documentation Changes

* add inline Tabs props documentation ([c0d6499](https://github.com/datacamp/waffles/commit/c0d649931942e6ab805c4b3c0edc243e6d21ee97))
* add Tabs documentation page ([9cd6512](https://github.com/datacamp/waffles/commit/9cd65124b93f78995135a457a4fb1282d33f92c4))
* add Tabs examples ([46a54f0](https://github.com/datacamp/waffles/commit/46a54f0f67f5aee7c490d0399fdc8f1b57ada627))
* stop preloading monospaced font ([b7b354b](https://github.com/datacamp/waffles/commit/b7b354b387e30d501c436217996d66e1be388edc))
* update button guidelines ([93b40ad](https://github.com/datacamp/waffles/commit/93b40adabf15348674102b3f46a46a7095158d6a))
* update convertedProps utility to better handle advaced types ([298c606](https://github.com/datacamp/waffles/commit/298c606ec0ddd9aeab1a230d07c1726da8082c0a))
* update roadmap and component status ([d78bf23](https://github.com/datacamp/waffles/commit/d78bf238fc246ffc93878da4aa726b79b3e823e8))


### Core Changes

* **code:** lower the opacity of inverted style ([405a646](https://github.com/datacamp/waffles/commit/405a6465a5ac150c2b1ab35ca357baa14f208c28))
* create basic Tabs and Tab components ([6b9f07b](https://github.com/datacamp/waffles/commit/6b9f07b0a30b8a869b8df03b159dee05e717e920))
* **icon:** add AddUser icon ([4c0a0eb](https://github.com/datacamp/waffles/commit/4c0a0eb8c9b290093dd2876b13162283fa33ee21))
* **icon:** add Picture icon ([85547dc](https://github.com/datacamp/waffles/commit/85547dce648e485abb95ad6b097a2c0c36eb77a4))
* **icon:** update Edit icon ([7799935](https://github.com/datacamp/waffles/commit/77999359fcd27dafdadc08949c54bfcedc4300e3))
* **tabs:** add auto activate on focus functionality ([78fc01a](https://github.com/datacamp/waffles/commit/78fc01a281abfca35e32e89ad3ca7cce1860cfe8))
* **tabs:** add disabled style and reworked faux element ([0a73ad2](https://github.com/datacamp/waffles/commit/0a73ad289ce93197c36f254689b3c48abba7bbc8))
* **tabs:** add inverted style ([5e6b766](https://github.com/datacamp/waffles/commit/5e6b7660999c4da2363c0631feb3fca1916279de))
* **tabs:** add Tab to Tabs namespace ([8c1a83b](https://github.com/datacamp/waffles/commit/8c1a83b88e46f99d2031bd7e29feddf39611aa1a))
* **tabs:** allow key prop to index tabs ([2bf8ffd](https://github.com/datacamp/waffles/commit/2bf8ffd4ceed11d2ecd390a3fb365a6a3ced1acc))
* **tabs:** create basic Tabs and Tab styles ([90596d5](https://github.com/datacamp/waffles/commit/90596d5373298d90ad6b9ea8ad267c0f5098c0d8))
* **tabs:** enable usage of icon next to label ([7193bdc](https://github.com/datacamp/waffles/commit/7193bdcd49e2d0a466228fb56780945642cf614c))
* **tabs:** extract tab list to separate component ([3160e14](https://github.com/datacamp/waffles/commit/3160e143340ba7ea002139199f51cc43d2f06b52))
* **tabs:** hide gradient mask for short tabs on mobile ([604dd1c](https://github.com/datacamp/waffles/commit/604dd1c2c8e49b2595f8ffce69bf5f45ab8bc17f))
* **tabs:** make onChange optional ([8e60e2f](https://github.com/datacamp/waffles/commit/8e60e2fc8d6806da7abeaf2c71ba8353bb5e84fa))
* **tabs:** make Tab polymorphic ([3461017](https://github.com/datacamp/waffles/commit/3461017b6b4663a0e02b977bedcd09c996df8811))
* **tabs:** make tabs scrollable on mobile ([6c6152b](https://github.com/datacamp/waffles/commit/6c6152b322f69d8fc57fcd40b5e00da924e8c2ff))
* **tabs:** manage keyboard interactions ([0aac3f4](https://github.com/datacamp/waffles/commit/0aac3f4fde2eb56f51c16a3d88f31ecc4dd5b5f1))
* **tabs:** merge tab event handlers ([bd1c5bb](https://github.com/datacamp/waffles/commit/bd1c5bb39509424ef30c6e724a8b0b3120dd83fb))
* **tabs:** update active disabled tab style ([451784b](https://github.com/datacamp/waffles/commit/451784bf3d512ea34cf9a8f3650b21ffa4544400))

## [1.0.0](https://github.com/datacamp/waffles/compare/v0.22.0...v1.0.0) (2021-11-30)


### ⚠ BREAKING CHANGES

* v1.0 release

### Core Changes

* **input-field:** rename TextField to InputField ([4a71423](https://github.com/datacamp/waffles/commit/4a71423f6cacf817a01f544e833b3d582cc91dbf))


### chore

* v1 release ([3c7024c](https://github.com/datacamp/waffles/commit/3c7024cffff3aabe46f6bac902bb19ae1e686752))


### Documentation Changes

* create LandingPageCard component ([9b95a31](https://github.com/datacamp/waffles/commit/9b95a31c82a15f95318fd2c4c577031b6cf89cfe))
* fix regex removing eslint flags in examples ([3453d90](https://github.com/datacamp/waffles/commit/3453d902b9ac38506e5d954b3823c2dd19160641))
* implement context for generating table of contents ([cad9e3a](https://github.com/datacamp/waffles/commit/cad9e3ad30d6fdadf46b6f4ae206f01b6dcfae2f))
* make links to figma components open in new tab ([c2f1a01](https://github.com/datacamp/waffles/commit/c2f1a01daae8677f50839d11e252d95be8d280c8))
* update landing page ([b1511a3](https://github.com/datacamp/waffles/commit/b1511a36d78b62c658ae63a3199580e2be2de12c))
* update roadmap and naviagation ([3fe49c5](https://github.com/datacamp/waffles/commit/3fe49c5e79aa472d0ac3d199ebedb4f4f53bc91e))
* use context to generate table of contents on each page ([527230e](https://github.com/datacamp/waffles/commit/527230e5989e5737753bc3b87910c7f266bd33a0))

## [0.22.0](https://github.com/datacamp/waffles/compare/v0.21.0...v0.22.0) (2021-11-24)


### Bug Fixes

* **link:** inherit line height ([701beeb](https://github.com/datacamp/waffles/commit/701beeb5df08f7a9ed6481835e8774104d6581b4))
* placeholder style for inputs ([d2491bd](https://github.com/datacamp/waffles/commit/d2491bd9dccd0e50c115d845110cbd8ccc4b390f))
* rendering of enhancers when inputs are next to each other ([ddfad45](https://github.com/datacamp/waffles/commit/ddfad4559b162661d348105ea8e780407b4beeed))
* update how height of Input and Select are set ([f3be66a](https://github.com/datacamp/waffles/commit/f3be66a4baf6424a75b82fde1332345ab09a7b70))


### Core Changes

* **button:** update focus style ([6a0e6ca](https://github.com/datacamp/waffles/commit/6a0e6ca360ca6b63426ab1aaebfc281fb5a607de))
* change description type to be less restrictive ([98e323d](https://github.com/datacamp/waffles/commit/98e323d1e94ad2978e3f7be95af39dc1d10179c7))
* **checkbox:** add error style ([8581c4b](https://github.com/datacamp/waffles/commit/8581c4bee77b15929a5e54da8f633578099c42a4))
* **checkbox:** add inverted styles ([9500ba2](https://github.com/datacamp/waffles/commit/9500ba244b74892f8ca67a6c5633ba460e375be0))
* **checkbox:** create basic checkbox component ([4633b33](https://github.com/datacamp/waffles/commit/4633b33e4045fd56c61473d111fd55b44575470f))
* **form-control:** abstract away advanced form element features ([83d1163](https://github.com/datacamp/waffles/commit/83d116323f4c73aeb872b8f9dbe0301665a3f1ea))
* **form-control:** allow user defined ID ([b5e1e02](https://github.com/datacamp/waffles/commit/b5e1e02b7e1f97f4629c14b388ecdabc28e51fe9))
* **form-control:** change to render props pattern ([8e94fe2](https://github.com/datacamp/waffles/commit/8e94fe26ffbefa19d985a76dcfc12789bbae1ef8))
* **form-control:** don't pass error as render prop ([9f9fa33](https://github.com/datacamp/waffles/commit/9f9fa33ddc63c09c1fd077498ca1f3f77c355251))
* **form-control:** make an error part of regular flow ([ad0d28f](https://github.com/datacamp/waffles/commit/ad0d28f7e75472877c612a1b209e727fe45c75b2))
* **hooks:** extract useId to separate module ([badea47](https://github.com/datacamp/waffles/commit/badea47ba6bab0c66d6cc0a8879034188b887a11))
* **icon:** add keyboard icon ([771a35b](https://github.com/datacamp/waffles/commit/771a35bb6ddaea49d09fd23a56d490e37d4a2c2c))
* **input:** add icon left and enhancer right ([f54d0ac](https://github.com/datacamp/waffles/commit/f54d0aceaf367954535e6965c64f931fb128a5bc))
* **input:** add optional description ([591c743](https://github.com/datacamp/waffles/commit/591c7432c14d5e0769eb41f4adbb6265429fb01d))
* **input:** add required marker ([b91760f](https://github.com/datacamp/waffles/commit/b91760fb443a677c09bef39a304ed66dbd0f34e9))
* **input:** create basic input component ([cc34ebd](https://github.com/datacamp/waffles/commit/cc34ebd36429e2d2282b2657de6d5d99fdfbe29a))
* **input:** define sizes and inverted variant styles ([8122863](https://github.com/datacamp/waffles/commit/8122863790bf9a20ff87fd8b36f1a058a76b310c))
* **input:** for search input type display appropriate icon ([935f9f6](https://github.com/datacamp/waffles/commit/935f9f6a84243c600d159b56a37e3fdc0e4c4597))
* **input:** implement and expose enhancer component ([a1bb684](https://github.com/datacamp/waffles/commit/a1bb684ebf3d2292d981e4a1a6d28c06f3ae51c1))
* **input:** implement toggle password text functionality ([f1145dd](https://github.com/datacamp/waffles/commit/f1145ddea3a3c970bc371beb9199fb18f3fd6110))
* **input:** improve disabled behavior ([b31aa81](https://github.com/datacamp/waffles/commit/b31aa8189ca634638f91dc6d6f2060051281f51d))
* **input:** improve error message a11y ([0a7589d](https://github.com/datacamp/waffles/commit/0a7589de668bf186f7bde997c50761d72e29ff48))
* **input:** leave only plain input features ([c889f2f](https://github.com/datacamp/waffles/commit/c889f2ffafce04ca4920899caf455ae8379ef526))
* **input:** pass disabled prop to custom right enhancer ([cc93501](https://github.com/datacamp/waffles/commit/cc9350119f801887a685502f3336d3becd7dcef3))
* **input:** pass ref ([fecc7c7](https://github.com/datacamp/waffles/commit/fecc7c7b0033f63d690d367ed60489892ba2a51e))
* **input:** update error positioning ([a1457c8](https://github.com/datacamp/waffles/commit/a1457c87f30eeaa64545de9cbc85fe0bd178be20))
* make FormControl required label non selectable ([ce1c02d](https://github.com/datacamp/waffles/commit/ce1c02dd0d55c3bb08a5fde1151d014ffcd755d7))
* pass ref to checkbox, radio, and switch ([809129c](https://github.com/datacamp/waffles/commit/809129cb698c0f3122f7ed4448c2b859f3aeb138))
* **radio:** add inverted styles ([81c48eb](https://github.com/datacamp/waffles/commit/81c48eb87feda943f540e8727112902af6d2be79))
* **radio:** implement radio input component ([6a1be3c](https://github.com/datacamp/waffles/commit/6a1be3ce9bff3a0a8e41fabfb31563144998e397))
* **screen-reader-only:** implement component to visually hide content ([4541dbe](https://github.com/datacamp/waffles/commit/4541dbea2dcbd56f40705659d98b8e8dbbbca0bd))
* **select-internal:** simplify placeholder handling ([9797237](https://github.com/datacamp/waffles/commit/979723763389dc94f179a1379e1a065b178215c9))
* **select:** add placeholder option style ([71fca20](https://github.com/datacamp/waffles/commit/71fca20fa90f49d45af3373fb8da15165dabe112))
* **select:** implement basic select component ([729bd73](https://github.com/datacamp/waffles/commit/729bd734eb00ba6097bbea2c408a89b2e27db845))
* **select:** wrap select with FormControl and handle placeholder ([376f950](https://github.com/datacamp/waffles/commit/376f950f9b7d57ad8221da6a4afa88d429acd8d4))
* **switch:** implement switch component ([bd826ea](https://github.com/datacamp/waffles/commit/bd826ea6ccef5d712562a6124359db8aae64e1b5))
* **switch:** improve a11y ([1ad97df](https://github.com/datacamp/waffles/commit/1ad97df13cb4917e3c35bdf853c857290433a17a))
* **text-area:** add auto grow functionality ([8b22349](https://github.com/datacamp/waffles/commit/8b22349a6b07002e3d1041f1ec362b835b6cc264))
* **text-area:** implement basic text area ([e06c826](https://github.com/datacamp/waffles/commit/e06c8269bcebfcaaa8bbde15d5b5df4b56eb7e3a))
* **text-field:** implement text-field based on input ([bbadb72](https://github.com/datacamp/waffles/commit/bbadb7219b86b5d245aa3455e7f4f5f0b853d5fa))
* **text-field:** improve required behavior ([b99c2ce](https://github.com/datacamp/waffles/commit/b99c2ce73080ca040b78e4644988a8d4666a59c4))
* update checkbox and radio focus ring ([0f1e4e3](https://github.com/datacamp/waffles/commit/0f1e4e369ccb65e05df0e30bbacf3866906e60c9))
* update positioning of checkbox, radio, switch handles ([80f3bfb](https://github.com/datacamp/waffles/commit/80f3bfb5ef79a9b4490baa0453f7db292aef01b3))
* use FormControl to extend TextField ([8294be3](https://github.com/datacamp/waffles/commit/8294be30c39f47c67bb6008e55e9e299dd76c836))


### Documentation Changes

* add basic 404 page ([fd4baf6](https://github.com/datacamp/waffles/commit/fd4baf638a9197660161928c330fa2b668eb162d))
* add basic Checkbox documentation page ([33d9bf0](https://github.com/datacamp/waffles/commit/33d9bf064b486fc1423a34beb3da4defa6c945d0))
* add basic Input documentation page ([3931606](https://github.com/datacamp/waffles/commit/39316061aa4de5e29d5ce4abf6d2513b3883a087))
* add basic Radio documentation page ([3ee0bc0](https://github.com/datacamp/waffles/commit/3ee0bc005a3e445875c38ffa08b496b51120d53e))
* add basic ScreenReaderOnly page ([53e2942](https://github.com/datacamp/waffles/commit/53e294236c026352e368ddf0a6eca64afcefc6f5))
* add basic Select documentation page ([cea2c9b](https://github.com/datacamp/waffles/commit/cea2c9bd3626216731b8987842ce2ae5bac5a0f3))
* add basic Switch documentation page ([671c927](https://github.com/datacamp/waffles/commit/671c927748da1e3ca4be1e29522044697b72eea9))
* add basic TextArea documentation page ([ba60fbf](https://github.com/datacamp/waffles/commit/ba60fbfbf9b7cbef771e8c165ccd3e7902318e7e))
* add basic TextField documentation page ([d9c325e](https://github.com/datacamp/waffles/commit/d9c325edd589ec9926c8c295ebf531153a580be5))
* add inline props docs to Enhancer ([f61368e](https://github.com/datacamp/waffles/commit/f61368ec7d9daef622fbb664d24b4eb615c01750))
* add nav links to new components docs ([5d9bb7d](https://github.com/datacamp/waffles/commit/5d9bb7ddc1a98f7ada1d74c294698cd04b66192b))
* add table of contents for each page ([888040d](https://github.com/datacamp/waffles/commit/888040d909e2fdcddce5917d9a65a9e95d44140d))
* clarify purpose of Link component ([a61fe8b](https://github.com/datacamp/waffles/commit/a61fe8bb27405911a2fb2c8c185687d88d4d13cd))
* create basic hooks documentation page ([be6c8a1](https://github.com/datacamp/waffles/commit/be6c8a17b19c49227828838acda7ab877fcacc16))
* fixed design tokens colors table ([88e881c](https://github.com/datacamp/waffles/commit/88e881c7bbcecc4ef89127af1b7e06c40751e29c))
* fixed page header z-index ([7312c49](https://github.com/datacamp/waffles/commit/7312c493e09a9fa7fe0e3fd4d892ea1719044d2b))
* format examples to fit nicer ([94875d1](https://github.com/datacamp/waffles/commit/94875d1370c1fc502b33f22187b46fda7071437f))
* hide table of contents on smaller screens ([210cb74](https://github.com/datacamp/waffles/commit/210cb7470ffa53a29e13707b2d4c339277eb7277))
* inline props documentation for ScreenReaderOnly ([c176e61](https://github.com/datacamp/waffles/commit/c176e61746a6cc34da516fbb2c3364c105ede37f))
* provide Checkbox props inline docs ([4541c4d](https://github.com/datacamp/waffles/commit/4541c4d557a333279c088cb21849fde97754b06e))
* provide Input props inline docs ([da14b97](https://github.com/datacamp/waffles/commit/da14b9720e86a5ee7dd585c47b5985b19dd4e184))
* provide Radio props inline docs ([9e02cd0](https://github.com/datacamp/waffles/commit/9e02cd0d3eb3f1b81c70da384ce07561f5e4e19c))
* provide Select props inline docs ([2dc8478](https://github.com/datacamp/waffles/commit/2dc84785e00049be241289df9b3fdbee2a7279cf))
* provide Switch props inline docs ([31cc987](https://github.com/datacamp/waffles/commit/31cc98737bf90f665de278a938031f4adaface7b))
* provide TextArea props inline docs ([e667c36](https://github.com/datacamp/waffles/commit/e667c369cc2b6534fe4029dd6215aa6768cbc287))
* provide TextField props inline docs ([7541208](https://github.com/datacamp/waffles/commit/7541208ce7411f3f8c532b96228ac527aaedb1a7))
* remove comments from code examples ([b028ec7](https://github.com/datacamp/waffles/commit/b028ec754ea35541486729034516b559f154a729))
* remove decision log page ([1fac8fb](https://github.com/datacamp/waffles/commit/1fac8fb589fe0b25316f22f249d79d74aa983b52))
* set arbitrary buttons content width ([2cc73cd](https://github.com/datacamp/waffles/commit/2cc73cd41454121f8dfe54a912c003e98e1945e7))
* simplify required prop style ([aa574f5](https://github.com/datacamp/waffles/commit/aa574f58fd1bff3cf25273d7f4f998acea7b1ca9))
* update component status list ([6ca57cf](https://github.com/datacamp/waffles/commit/6ca57cf28dc7590625b50eb4caa566be3a92dec7))
* update error TextField story ([c6eb9d5](https://github.com/datacamp/waffles/commit/c6eb9d5bb3008bcbde8cea31023a776dddf4c4d2))
* update examples ([861645e](https://github.com/datacamp/waffles/commit/861645ee56427b63624ed5d30e0552aa313dddfa))
* update examples after change to error in FormControl ([2834432](https://github.com/datacamp/waffles/commit/2834432a48a30fb337075710b865ffd5ef611ee5))
* update props section ([784a7a2](https://github.com/datacamp/waffles/commit/784a7a22e7e51ea005d8b5bd53d3a0b62603e9ee))
* update roadmap ([b097112](https://github.com/datacamp/waffles/commit/b097112541a00a554ecf55b30ad5752eabf9dd82))
* update TextArea required story ([2d07ccb](https://github.com/datacamp/waffles/commit/2d07ccbb4911ae72699b7a7d1b8c7363fb419234))

## [0.21.0](https://github.com/datacamp/waffles/compare/v0.20.0...v0.21.0) (2021-10-21)


### Bug Fixes

* **content-container:** adjust the order of media queries to be safe ([5a3fe7d](https://github.com/datacamp/waffles/commit/5a3fe7d753c2e74885a5347e2e1ca41b4e476731))
* **tooltip:** calculate tooltip position correctly ([4c50118](https://github.com/datacamp/waffles/commit/4c5011886c899c6044ea92110d638b2d2b03d669))


### Core Changes

* **button:** auto generate hover colors from tokens ([bbeed31](https://github.com/datacamp/waffles/commit/bbeed31d7cd1fe99cab18d2571505fc0790cfa9a))
* **button:** expose button internal only for docs purposes ([3a17756](https://github.com/datacamp/waffles/commit/3a177565a1dcae025eb78a4fd95cac1c2b762a30))
* **button:** tighten typings ([ac4901d](https://github.com/datacamp/waffles/commit/ac4901d18191c29d484cb6f15bafac88c12e731a))
* **button:** tighten up icon display logic ([e645165](https://github.com/datacamp/waffles/commit/e6451656a59a5e60582f7b4b71ca19e75260fc2d))
* **chapeau:** add inverted style variant ([dac6d77](https://github.com/datacamp/waffles/commit/dac6d77e1124685bcf13270e206b8c274381d05a))
* **code-block:** update typings ([c69fd5a](https://github.com/datacamp/waffles/commit/c69fd5af7e1afd1e636fcb40ed5a53f8febd80ac))
* **display:** add inverted variant ([0368b13](https://github.com/datacamp/waffles/commit/0368b13d558cc8e9a918f5e0a11a4cef7fee4766))
* **heading:** add inverted variant ([7cea102](https://github.com/datacamp/waffles/commit/7cea102dd0ef3267c41b490140b568049f2f2d65))
* **helpers:** add hexColorLuminance utility ([33de78a](https://github.com/datacamp/waffles/commit/33de78aa58cdad2096c146409e49a02685b7b40c))
* **helpers:** add isHexColor utility ([d414b43](https://github.com/datacamp/waffles/commit/d414b43cb517a6bddb4505125ae17059501659bb))
* **helpers:** add readableHexColor utility ([b231c8e](https://github.com/datacamp/waffles/commit/b231c8ec6442a9fd2c4221f144ce6e35bf7d9d39))
* **helpers:** implement hexColorShade utility ([d77812b](https://github.com/datacamp/waffles/commit/d77812b19db128484de2882ff4ab510dbf78dc99))
* **helpers:** improve error handling in hexToRgba ([f908541](https://github.com/datacamp/waffles/commit/f908541ec7a08a4df1470caa458087d2fdfa3194))
* **icon:** add kaggle brand icon ([bc36e6e](https://github.com/datacamp/waffles/commit/bc36e6e07a0b5beb6b6ba1c0f9c811ae7478ef24))
* **icon:** properly capitalize DataCamp brand icon ([786bdf9](https://github.com/datacamp/waffles/commit/786bdf9025ad604e38b524419da008fc966fce58))
* **icon:** remove side padding ([ed18c6d](https://github.com/datacamp/waffles/commit/ed18c6d4bb88dff0d83f95a97f683543c7951666))
* **icon:** update external-link ([491c4c2](https://github.com/datacamp/waffles/commit/491c4c2c2c5443332992f4d36ede019040a377b8))
* **link:** adjust position of icons ([0d981fe](https://github.com/datacamp/waffles/commit/0d981feba00e75258fa099a6b0f3094a1c376f66))
* **link:** inherit font size and adjust icon placement ([d6c73a1](https://github.com/datacamp/waffles/commit/d6c73a1dc397bd876b1e844f1bf21430ae7f4e94))
* **paragraph:** add extra sizes ([b18946f](https://github.com/datacamp/waffles/commit/b18946fb9e95efadd238c28b5f7ef24d871bec9b))


### Documentation Changes

* add ability to skip some props by providing [skip docs] flag ([a88e2bd](https://github.com/datacamp/waffles/commit/a88e2bd3a40d043baf4ba3bb109cc772f5d7356e))
* add ambient type declaration for babel ts preset ([fdb9b7d](https://github.com/datacamp/waffles/commit/fdb9b7d7a67aa930231d84089da7d554377a4c3b))
* add basic content container documentation page ([60de5ec](https://github.com/datacamp/waffles/commit/60de5ec4cc1d52afc48d530bce4df2a423f32037))
* add basic text documentation page ([521c4d7](https://github.com/datacamp/waffles/commit/521c4d7724af988c7ce47053e5b8f4a372531766))
* add button documentation page ([7bcfff8](https://github.com/datacamp/waffles/commit/7bcfff84379f982611af7145bb649f458b679847))
* add button examples ([bc2ac2a](https://github.com/datacamp/waffles/commit/bc2ac2aeda5bad2be1c3226fd5e2708be8dcd700))
* add button states example ([6e90969](https://github.com/datacamp/waffles/commit/6e90969941e72219f135c583c41cd0d68bc73e93))
* add chapeau examples ([5e865d9](https://github.com/datacamp/waffles/commit/5e865d9827a7660734a236d08eed999c9d025efe))
* add chapeau inline props documentation ([ceb7f93](https://github.com/datacamp/waffles/commit/ceb7f9358bfc25b305b5c7106e714c3c1afd5f7d))
* add code block examples ([0ffe707](https://github.com/datacamp/waffles/commit/0ffe7073b90314993088666a051f39259f45bb44))
* add code examples ([637f4d4](https://github.com/datacamp/waffles/commit/637f4d4bf1b9c7df835f4059ed4b8e9457f4a48f))
* add code inline props documentation ([e0a45f8](https://github.com/datacamp/waffles/commit/e0a45f89eeb7f3f7d9484a253efe95beaa6a9459))
* add component which shows all icons ([4ce3278](https://github.com/datacamp/waffles/commit/4ce3278d1a46ef576d9b8b581f72524b3dccf047))
* add custom table components to markdown elements ([6fbcc55](https://github.com/datacamp/waffles/commit/6fbcc554890d95921387b04facfe995463f07bdc))
* add design tokens page ([23dc1c9](https://github.com/datacamp/waffles/commit/23dc1c98b3e4bdda1078b98431e7a9ca0e4ed63e))
* add design-tokens examples ([ba82ea4](https://github.com/datacamp/waffles/commit/ba82ea4e09f0ecdff0b233f0665935b3ed8df536))
* add display examples ([abeca43](https://github.com/datacamp/waffles/commit/abeca4396d2af82e436632e581882c268d84d931))
* add display inline props documentation ([20d226a](https://github.com/datacamp/waffles/commit/20d226a233b2113d7ed5c4e46f93cc42c2fbabfe))
* add extensive helpers documentation page ([eafbb08](https://github.com/datacamp/waffles/commit/eafbb08014bee03f7e3ab77b472b21a63c8ed112))
* add flag to enable dark preview in example ([8a5a620](https://github.com/datacamp/waffles/commit/8a5a620ac1a78782701048e340992c23fdae3f99))
* add helpers examples ([539505a](https://github.com/datacamp/waffles/commit/539505a3608257afc53d008241291f47dd5c1b28))
* add icon examples ([1fa439e](https://github.com/datacamp/waffles/commit/1fa439ea3928274e5cb63753546b080a0d1b0dd6))
* add icon page and update button documentation ([7899802](https://github.com/datacamp/waffles/commit/78998021ea5b5cdb55f0e6defb35b55b88c9e082))
* add icon props documentation ([f605269](https://github.com/datacamp/waffles/commit/f605269ba06069093b63b0f6eb00ce3bf61ce424))
* add inline content container props documentation ([0bbed01](https://github.com/datacamp/waffles/commit/0bbed010f5dff20be051ba9bd1b908641694c9d2))
* add inline portal props documentation ([f0dbb25](https://github.com/datacamp/waffles/commit/f0dbb251553ee468451d179dfe638ad3fa16a8ac))
* add inline props documentation for button ([a428663](https://github.com/datacamp/waffles/commit/a428663d36294d40b1119ffe9dbd3e0e30e02101))
* add inline text props documentation ([c4f2072](https://github.com/datacamp/waffles/commit/c4f20721f38dc78e42e400ecf309e02d212f1dae))
* add inline tooltip props documentation ([afb5f56](https://github.com/datacamp/waffles/commit/afb5f5620e92531c45a435bde005294e980a6797))
* add isPolymorphic flag to props-table ([406030f](https://github.com/datacamp/waffles/commit/406030fefa7f26f819c16c085087622b577b1c31))
* add link examples ([68a6dca](https://github.com/datacamp/waffles/commit/68a6dcabf1c717a9653273bca4b48535c81f7b25))
* add link inline props documentation ([3e91944](https://github.com/datacamp/waffles/commit/3e919443c658b585b1d5b7b3f5ba019d102b1ca6))
* add more advanced tooltip examples ([0727605](https://github.com/datacamp/waffles/commit/0727605634bd402ec737b7ff1ee67ae4003ff6fc))
* add next up section to roadmap page ([d001e75](https://github.com/datacamp/waffles/commit/d001e75fc86d52426e2da3b38b7decc99321a4bd))
* add paragraph examples, props, and playground ([eb53176](https://github.com/datacamp/waffles/commit/eb53176c432dfcfba62aa312a9323b440332b17e))
* add placeholder decision log page ([8547389](https://github.com/datacamp/waffles/commit/85473892bdbb7a352f625ededc9f817cac8f3000))
* add remark GFM plugin ([d69116b](https://github.com/datacamp/waffles/commit/d69116bb4bf6186668a1bc85045165c8613f6b22))
* add roadmap adnotation ([0ff0292](https://github.com/datacamp/waffles/commit/0ff0292032e6e3486a548c4ebae619ef30ec547d))
* add roadmap table of component status ([f26be84](https://github.com/datacamp/waffles/commit/f26be844eafc956f807cad988c800f5b5dd5b048))
* add section about props autogenarated docs in dev guide ([7b4e5a0](https://github.com/datacamp/waffles/commit/7b4e5a06db19feac10d35282c95fd768f1bf7db6))
* add setup section for engineers ([b81ddc4](https://github.com/datacamp/waffles/commit/b81ddc4abf3d9000d51d4f0e4558b173ebc52e0b))
* add text examples ([11dde9a](https://github.com/datacamp/waffles/commit/11dde9a2ce0a4da629629256d2b4e71435cd2418))
* add toggle to show or hide icons preview labels ([d90df3f](https://github.com/datacamp/waffles/commit/d90df3fe384b4ec5b02a43d10592ce9926c87899))
* additional spacing guidelines for tokens ([c4338e2](https://github.com/datacamp/waffles/commit/c4338e208d18bf118744a1e18c2abfc69260d156))
* adjust example and markdown minor styles ([ade1079](https://github.com/datacamp/waffles/commit/ade107974668482f7edaf8c18317a54cf0614b06))
* adjust example border color ([f12fc93](https://github.com/datacamp/waffles/commit/f12fc933c4713660a1987e205fc2f3a6be98319b))
* adjust markdown heading margin ([5bdb700](https://github.com/datacamp/waffles/commit/5bdb700f099e52face300d26353762469fe75066))
* allow to manually specify imports ([5e7e45f](https://github.com/datacamp/waffles/commit/5e7e45f13c54af555349561c5d78a28b4212a31c))
* basic tooltip documentation page ([0d35693](https://github.com/datacamp/waffles/commit/0d3569340d1ca7c0cdf14b6625241c9c8adaf1ee))
* basic tooltip examples ([43b3d2e](https://github.com/datacamp/waffles/commit/43b3d2e633125c0c8e5567aa26dc9f91721704fc))
* change introduction category name to overview ([12c5c21](https://github.com/datacamp/waffles/commit/12c5c219cce2def0c01a9500f9366131b504261f))
* create basic code block documentation page ([46a2231](https://github.com/datacamp/waffles/commit/46a2231400d5aa16dc63b8c4bbd267d445d0e566))
* create basic code documentation page ([e716fda](https://github.com/datacamp/waffles/commit/e716fda13b0c71d059a0b6d6c9d3ba3259b90d41))
* create basic documentation page for chapeau ([fec4e97](https://github.com/datacamp/waffles/commit/fec4e973e63eb4f7d096ab96999be28267b53e6e))
* create basic heading doc page with examples ([1c2c92b](https://github.com/datacamp/waffles/commit/1c2c92b2048b73f72763371e3e9c45551fb5cf49))
* create basic portal documentation page ([e532703](https://github.com/datacamp/waffles/commit/e5327035b08945bda14ba6e52b98d03f0e6f28f9))
* create custom previews for each design tokens group ([357f7a9](https://github.com/datacamp/waffles/commit/357f7a9b21abc0a000a8fb210e99b18ba48e62bd))
* create display documentation page with examples ([c5ad94c](https://github.com/datacamp/waffles/commit/c5ad94c08f1a29bc8de7b2b70d760af08380981d))
* exclude table elements from props table markdown ([e1b5552](https://github.com/datacamp/waffles/commit/e1b55523d1e85da557c4c5beebef9129c95b8a21))
* extract albel section from button general best practices ([7a7120a](https://github.com/datacamp/waffles/commit/7a7120a89af28600bf1dbfd1955543d2ecae7882))
* fix a link in icon props table ([ebe8da5](https://github.com/datacamp/waffles/commit/ebe8da54db3012459070f05193822006adbaf820))
* fix layout showing scrollbars when wrapping ([3ee9c31](https://github.com/datacamp/waffles/commit/3ee9c31d23092599ad83c909238eec1322341f49))
* fix props sorting ([c991471](https://github.com/datacamp/waffles/commit/c99147163b0eb6845c5adb6c26f558919ab6c4ff))
* fix typography examples ([f295356](https://github.com/datacamp/waffles/commit/f2953566df2355b0689916f7a7787476f67065b7))
* fixed markdown code ([250d36e](https://github.com/datacamp/waffles/commit/250d36eb8c9d9637c9468f42cdc12020376b73d2))
* grammar fixes ([5d9f3d6](https://github.com/datacamp/waffles/commit/5d9f3d67ab7c82d4858003246ac14d3a466c9b40))
* hide icon names at first in icons grid ([68f83e0](https://github.com/datacamp/waffles/commit/68f83e00e9f4140aaa1b97ea4a10809c0608a47d))
* implement component-status ([a87ea6b](https://github.com/datacamp/waffles/commit/a87ea6b9c4652c72f5d4e6254833ea3e3ab0a843))
* implement component-status-table ([6bfcbd8](https://github.com/datacamp/waffles/commit/6bfcbd8ca1f5a192cfdd1383b768ed9641d73082))
* implement table to display design tokens ([c20253e](https://github.com/datacamp/waffles/commit/c20253e279da8b3c9760705198f70db3213763a3))
* implement utility to group icons ([4870757](https://github.com/datacamp/waffles/commit/48707574272e50a14977831b0b440e6bd7999861))
* provide heading props inline docs ([e0d39fb](https://github.com/datacamp/waffles/commit/e0d39fbc3512133e9f0088d5c5b3b68628727289))
* reduce main content width and adjust some examples ([169d75f](https://github.com/datacamp/waffles/commit/169d75f18d21b0320c99a22e5113fa19f4f6fc3c))
* remove unsupported markdown element from mapping ([e446414](https://github.com/datacamp/waffles/commit/e446414638f19e30ad3b131489a55ddf6d9b3c7a))
* setup code block rendering in markdown ([0c3bc4b](https://github.com/datacamp/waffles/commit/0c3bc4b3af65bef17cf10733f7ad31dfcff06b19))
* small tweaks ([21ba42f](https://github.com/datacamp/waffles/commit/21ba42fd2808471364904c2008bbe9591abd5e51))
* update button examples ([a87a7d8](https://github.com/datacamp/waffles/commit/a87a7d8a318c02609d97dfe397ec18871247f13d))
* update button playground config ([b795cca](https://github.com/datacamp/waffles/commit/b795ccaebc37f91ffb44f5241baf5680c1f9b24b))
* update icon example ([5596323](https://github.com/datacamp/waffles/commit/5596323615cf823b1ccc3f53ae6cf5917991a03b))
* update strong html element font weight ([9f9c2c4](https://github.com/datacamp/waffles/commit/9f9c2c464a158a0dc6fc75ec4044d6510f4a81ba))

## [0.20.0](https://github.com/datacamp/waffles/compare/v0.19.0...v0.20.0) (2021-10-05)


### Bug Fixes

* docs logo in safari ([54ba036](https://github.com/datacamp/waffles/commit/54ba036178518ad86d33df7fa13c9dbc890e03eb))


### Core Changes

* **button:** change hover color for primary variant ([8b513fd](https://github.com/datacamp/waffles/commit/8b513fda17631cba39423eda311090affb19df0d))
* **button:** specify lighter colors for inverted hover ([b196721](https://github.com/datacamp/waffles/commit/b19672196bc86453528432e690214141f8f149c2))
* **button:** update destructive variant hover color ([2af73ee](https://github.com/datacamp/waffles/commit/2af73eeba8438cc00514d0bcc011f0d53242edfb))
* **content-container:** set top and bottom padding ([494f41f](https://github.com/datacamp/waffles/commit/494f41fc9d6ad9108df0e909f5d3866876a1284b))
* **link:** add subtle highlight hover color ([27faaaf](https://github.com/datacamp/waffles/commit/27faaaf975d7d8625b3e336aab9422d46aec4f0b))
* **link:** change hover background when focused ([ad484e0](https://github.com/datacamp/waffles/commit/ad484e009636832f31e63c44d26bb9c2f440a97c))
* **paragraph:** add bottom padding back ([6b37c72](https://github.com/datacamp/waffles/commit/6b37c72a79f229c11ac46e685dc7541d23137018))
* rename utils to helpers and move media-query there ([7360df1](https://github.com/datacamp/waffles/commit/7360df17266776c5f86dae632b89445070c8cec4))
* **tokens:** update opacity low token value ([96609b1](https://github.com/datacamp/waffles/commit/96609b19cf16aa402d9663c9875bb3e0cfc0c854))


### Documentation Changes

* add basic nav component ([2096717](https://github.com/datacamp/waffles/commit/2096717cdcb0778e25d4a9299660a7485aca5b88))
* add edit page link to the bottom of relevant pages ([e2e63a9](https://github.com/datacamp/waffles/commit/e2e63a927de4015d67cd90ef397748485ae2c202))
* add libs to autogenerate props docs ([4b3e006](https://github.com/datacamp/waffles/commit/4b3e00680f9fdde4a4d39ebc4c0249c2b18b9cee))
* add public pages placeholders ([e91f2ac](https://github.com/datacamp/waffles/commit/e91f2acc5945f13b134e41cfc4a755683e11b519))
* add reset code button to playground ([0affc58](https://github.com/datacamp/waffles/commit/0affc585a9c25b5d73fdb746ee8263f909cf7e7a))
* add sidebar component ([f1c34d0](https://github.com/datacamp/waffles/commit/f1c34d04e0bd9e0c5e5c824e767018ded6addbc2))
* add subcategory style to nav link ([b9f671e](https://github.com/datacamp/waffles/commit/b9f671e3657118ab7cbf123f1553daf1c3849f5b))
* add text selection color ([27222e5](https://github.com/datacamp/waffles/commit/27222e5e7a1d0f4936151ad0eddc5c87afd3e341))
* add textFromChildren utility ([f2cf307](https://github.com/datacamp/waffles/commit/f2cf307fb7d18533e6b6042e879a949fa50631aa))
* adjust best-practices style for single card ([98849f1](https://github.com/datacamp/waffles/commit/98849f19ebf260190ee91883fed0c494fce74e7d))
* adjust font size of paragrpah after main heading ([08634d5](https://github.com/datacamp/waffles/commit/08634d5498eb6555de415464396d29cb7df0c7a4))
* adjust secondary heading margin ([ad2082f](https://github.com/datacamp/waffles/commit/ad2082f6be2bc07c11f13992683d02dd8b81f368))
* adjust side nav look ([bc98ec4](https://github.com/datacamp/waffles/commit/bc98ec44c552f9a59f4c3741e96e3916607f5755))
* align copyright to the left ([5a7242c](https://github.com/datacamp/waffles/commit/5a7242c5147e616c7ed5d15531702d89f8c151a9))
* allow props-table to render markdown as description ([6340d7c](https://github.com/datacamp/waffles/commit/6340d7c4d39379970785148a998a86305de12f06))
* allow secondary headings to be bookmarked ([dc2b514](https://github.com/datacamp/waffles/commit/dc2b514d73cc9d430075ab47b220d189bfcfa82b))
* creat list component for markdown ([1bb2026](https://github.com/datacamp/waffles/commit/1bb20269a81c1fddca1eaa3c9e07d4e151f9553c))
* create navigation-category component ([f95fdac](https://github.com/datacamp/waffles/commit/f95fdac9c559bc2bc27f99375c9923dfdbbbb08a))
* create navigation-link component ([1b5558a](https://github.com/datacamp/waffles/commit/1b5558a7563943ec798b682792d4564c7455bc55))
* create props table component ([761eead](https://github.com/datacamp/waffles/commit/761eeadde5bfdbb1a260b1596a32a5d845adf28a))
* custom components mapping for mdx ([28a3773](https://github.com/datacamp/waffles/commit/28a37734d77a66a44ef21c32dd4c6f41bd9d1a73))
* enable docs written in markdown with mdx ([e245145](https://github.com/datacamp/waffles/commit/e245145993e9dc4f7936911912e1348a09539ec2))
* extract page title from mine heading ([d59589d](https://github.com/datacamp/waffles/commit/d59589d90da55a3084656417daba8afe47d7ea2c))
* fix svg logo in safari ([b1d7858](https://github.com/datacamp/waffles/commit/b1d785882ffff0141d607f81194a605ce3506542))
* higlight selected nav link ([ea282b3](https://github.com/datacamp/waffles/commit/ea282b325730d4ae20cfc3286b77969237aeedf0))
* implement basic page-layout component ([4a02953](https://github.com/datacamp/waffles/commit/4a02953afe0c5458a08c705839d16d214fa6d5be))
* implement best-practices component ([23168e6](https://github.com/datacamp/waffles/commit/23168e64c998e8a70604b3f6dc957c7b7135e3a7))
* implement convertedProps utility ([ac1ac8e](https://github.com/datacamp/waffles/commit/ac1ac8e9924ae2e0d05b55c6a38c209fb61cf796))
* implement example component ([21b018b](https://github.com/datacamp/waffles/commit/21b018bd9c53691e30f8827e35a1b2a0455fe2ff))
* implement imports component ([d16acd7](https://github.com/datacamp/waffles/commit/d16acd7cf96b813fd9c41ef48c4693e221cff5ad))
* implement nav subcategory component ([fd07298](https://github.com/datacamp/waffles/commit/fd0729819e7d34748fc8f831d545d868a3bf701b))
* implement page-header component ([ddf98cd](https://github.com/datacamp/waffles/commit/ddf98cdb610e931c7303719524b6193782b6a471))
* implement table component ([d1bf9e8](https://github.com/datacamp/waffles/commit/d1bf9e84c185f1c2f653d6cda7d22c2a7822c327))
* improve convertedProps typings ([5703af1](https://github.com/datacamp/waffles/commit/5703af172a82c0b2ce1757dda59d30ed29ef8906))
* make page-header position fixed at the top ([c1515cb](https://github.com/datacamp/waffles/commit/c1515cb4b0ab07e9289dc6f970f76223e53245a0))
* set up live coding components playground ([fc931df](https://github.com/datacamp/waffles/commit/fc931df556082d8aaabf18210888ccdb354e603e))
* set up side navigation ([5cfbf5e](https://github.com/datacamp/waffles/commit/5cfbf5ed16634bd608977af2b1c58eec4afce626))
* sort props and fixed optional flag adjustment ([15e6bce](https://github.com/datacamp/waffles/commit/15e6bcefc0a198390d8b89f27c6969968ae158e6))
* update link border width and it's on hover color ([41997a9](https://github.com/datacamp/waffles/commit/41997a90549e6fcd43d4b15f7b529a7019954208))

## [0.19.0](https://github.com/datacamp/waffles/compare/v0.18.0...v0.19.0) (2021-09-22)


### Core Changes

* **icon:** add flash and flash inverted icons ([4ec635c](https://github.com/datacamp/waffles/commit/4ec635c2cb0ca0e5049467fb489b9ae1e98b1f8a))
* **link:** update link hover underline style ([54c3c96](https://github.com/datacamp/waffles/commit/54c3c96eba6c7db0c43448f810610b312951ccd5))
* merge props in button, code-block, and link ([afbfead](https://github.com/datacamp/waffles/commit/afbfead7c210d146b9d10dc2d108ffc738a61a37))
* **portal:** implement isomorphic portal component ([bd1f0b3](https://github.com/datacamp/waffles/commit/bd1f0b34dc3d0b98af970e23d858dde639998360))
* **tokens:** add new popup z-index token ([87a813b](https://github.com/datacamp/waffles/commit/87a813b8301824e486b595eaf43998a536b4ad88))
* **tooltip:** add inverted style ([6d40fcd](https://github.com/datacamp/waffles/commit/6d40fcd628047d95d76b9895535cfb9056c4ddc9))
* **tooltip:** adjust styles slightly ([da6abd8](https://github.com/datacamp/waffles/commit/da6abd81feecd1c827fb6018f9b62f84a10d8b78))
* **tooltip:** allow offset to be passed with units ([b9807fd](https://github.com/datacamp/waffles/commit/b9807fdea73e459a40ef3e7d98b4a1acac83153d))
* **tooltip:** associate trigger and tooltip by id ([3ca7c39](https://github.com/datacamp/waffles/commit/3ca7c39a3a7db06bf2df6cb1620693dd1d0960ce))
* **tooltip:** custom hook for trigger position and size ([7d3f967](https://github.com/datacamp/waffles/commit/7d3f9670648d4f90990c218005dc1893859d74e2))
* **tooltip:** implement basic bottom placed tooltip ([d950e50](https://github.com/datacamp/waffles/commit/d950e50e803c579e7488250cef5e28a879fd7435))
* **tooltip:** set tooltip position based on placement ([80b1790](https://github.com/datacamp/waffles/commit/80b179094dc04f63e2757738a2a4fe4b168312f2))
* **tooltip:** show tooltip with very slight delay ([acda40a](https://github.com/datacamp/waffles/commit/acda40a041f1866ffda579ce8a34458dbdaaa48d))
* update external link icon ([7ea6de2](https://github.com/datacamp/waffles/commit/7ea6de2018cddc759e8828e902da3ce24c3ab4af))

## [0.18.0](https://github.com/datacamp/waffles/compare/v0.17.0...v0.18.0) (2021-09-09)


### Core Changes

* **button:** use polymorphic types fro utils ([8af469d](https://github.com/datacamp/waffles/commit/8af469d12953b9b11744589eba7d4c0b454cb4b0))
* **chapeau:** create chapeau component ([e323eed](https://github.com/datacamp/waffles/commit/e323eed0408a8e2bb06fb27b45c9d8a6525c3646))
* **code-block:** create code-block component ([78933c4](https://github.com/datacamp/waffles/commit/78933c4a5fb90fa065931ac51aea21b668abe40e))
* **code-block:** make code block focusable ([d56a3d8](https://github.com/datacamp/waffles/commit/d56a3d85352115cdc94d089de48d44735cdcd6db))
* **code:** implement code component ([7a5f057](https://github.com/datacamp/waffles/commit/7a5f0575e0888ccc23786c83a0eae853fa46e7d0))
* **code:** make code work as pre tag ([b303ffd](https://github.com/datacamp/waffles/commit/b303ffd35a2a4c443b3e005523bee9d0767bca98))
* **display:** adjust font weight ([3353f6d](https://github.com/datacamp/waffles/commit/3353f6dc7f0529abc482b8e261c120aa2ca1e197))
* **display:** create display component ([e345d93](https://github.com/datacamp/waffles/commit/e345d93572dbeab74e6e698889b46b236f36a845))
* **heading:** adjust line height ([59e50a4](https://github.com/datacamp/waffles/commit/59e50a4d2d2fcb33a77961b3f5995bbad4a60b9b))
* **heading:** create heading component ([9cba950](https://github.com/datacamp/waffles/commit/9cba9501528987ae1fcee74845207739344aa854))
* **link:** create link component ([b6d525a](https://github.com/datacamp/waffles/commit/b6d525a2977fe4025b7c54b2c0f2b6282196e2c2))
* **paragraph:** implement paragraph component ([75c47d5](https://github.com/datacamp/waffles/commit/75c47d5011dab8ff322cac58e9972123d1be9193))
* **paragraph:** remove margin from last paragraph in a section ([9851ca6](https://github.com/datacamp/waffles/commit/9851ca69dc710ddedc38347ecede536539f9bf46))
* **text:** implement generic text component ([e9ef4ac](https://github.com/datacamp/waffles/commit/e9ef4ac8d544246f745b0a43b36de327eae2f672))
* **utils:** add polymorphic component types ([db36ca5](https://github.com/datacamp/waffles/commit/db36ca59d6a7bc28193adefbe43a7729776c34b2))

## [0.17.0](https://github.com/datacamp/waffles/compare/v0.16.0...v0.17.0) (2021-09-03)


### Bug Fixes

* **button:** prevent content from shrinking ([5054ebd](https://github.com/datacamp/waffles/commit/5054ebd36a795097d85bb919a81b458eec53144b))


### Core Changes

* **button:** add disabled styles ([cf586f9](https://github.com/datacamp/waffles/commit/cf586f92aaa1d4f06b28ccd9d5c386acec0ffa92))
* **button:** add inverted variants for dark backgrounds ([2d07f9f](https://github.com/datacamp/waffles/commit/2d07f9f47f2403e6a0ade1bce40a67aa755f6805))
* **button:** add keyboard focus indicator style ([85c91ce](https://github.com/datacamp/waffles/commit/85c91ced583255ca65c5093227b211b367397705))
* **button:** add padding depending on button size ([6e5bb8c](https://github.com/datacamp/waffles/commit/6e5bb8c4b63b17596e6690d26004b2806933a2ca))
* **button:** add props to show icon, iconLeft, or iconRight ([7830b97](https://github.com/datacamp/waffles/commit/7830b97c957360dc80f5edf43aa67038176fe23c))
* **button:** adjust padding around label when there is an icon ([3ac7878](https://github.com/datacamp/waffles/commit/3ac7878a443f7ed0a5867e0ef4caa5fb3d76f971))
* **button:** clean button as a link style ([3aa7616](https://github.com/datacamp/waffles/commit/3aa7616b8e73122740d4b274afae6299608a4f94))
* **button:** extrac dynamic styles to separate file ([4150fa3](https://github.com/datacamp/waffles/commit/4150fa37eb07b99be9c4665c8f59def367ae4dff))
* **button:** forward ref ([6bfdae6](https://github.com/datacamp/waffles/commit/6bfdae65004ef45b6ee89f9cbb2b0ab090bdad09))
* **button:** implement base sizes and variants ([4d501b1](https://github.com/datacamp/waffles/commit/4d501b146857748322b920e80064fce88387cb6a))
* **button:** make button props extensible ([63c4860](https://github.com/datacamp/waffles/commit/63c486088ab0a4dda46d67bdb4b8319cc6e24089))
* **button:** make icons slots more flexible ([561116f](https://github.com/datacamp/waffles/commit/561116f103bce0f4a8342012bf8a8e4993ddb26c))
* **button:** support for fullWidth prop ([533e317](https://github.com/datacamp/waffles/commit/533e31767846c15d49d55795b189ce051ca0f836))
* **button:** update button to use hexToRgba util ([9109367](https://github.com/datacamp/waffles/commit/9109367518d4dad8f15f2fdf15cf22088c8b60c5))
* **button:** update secondary variant mappings ([7f502ad](https://github.com/datacamp/waffles/commit/7f502ad0081667312a64b4ad1f4b85303e3d40c5))
* **tokens:** convert opacity from percentages to unitless ([8c9c551](https://github.com/datacamp/waffles/commit/8c9c5518de189a33e266ddd0ef31e0f373cedfb5))
* **utils:** implement hexToRgba color conversion util ([8e191ec](https://github.com/datacamp/waffles/commit/8e191eca53ea9207a52b92ae7248d1331b3f43d8))

## [0.16.0](https://github.com/datacamp/waffles/compare/v0.15.0...v0.16.0) (2021-09-03)


### Core Changes

* **content-container:** extract styles to separate file ([ca7b845](https://github.com/datacamp/waffles/commit/ca7b845f85076674d9062550f2a2b1a6691b2d18))
* **content-container:** implement content wrapper ([d733339](https://github.com/datacamp/waffles/commit/d733339bc084c02acbf2ae186e9f48882574cb36))

## [0.15.0](https://github.com/datacamp/waffles/compare/v0.14.0...v0.15.0) (2021-09-01)


### Documentation Changes

* proofread docs ([f6838b6](https://github.com/datacamp/waffles/commit/f6838b6f3375e825ec7e43fafbb5c41c72f6277b))


### Core Changes

* **media-query:** generate media queries from breakpoints ([c9237bc](https://github.com/datacamp/waffles/commit/c9237bc652d10143236db4b7a28ed66660086ec6))

## [0.14.0](https://github.com/datacamp/waffles/compare/v0.13.0...v0.14.0) (2021-08-24)


### Documentation Changes

* mention generate icons script ([94433fe](https://github.com/datacamp/waffles/commit/94433fe096051271961ddec7c32f9d4a5c57ec78))
* update icons path ([c965f14](https://github.com/datacamp/waffles/commit/c965f1483ae0825634a832d24539fbdafe7bc64d))
* update npm script names ([b4b57f7](https://github.com/datacamp/waffles/commit/b4b57f73152994669c1f32cdf94c561c42f995e5))


### Core Changes

* **icon:** add base icon with size mapping baked in ([7583ad1](https://github.com/datacamp/waffles/commit/7583ad1806e86a2603bf22a8d0747b24a0271e4c))
* **icon:** add colored pay pal bran icon ([e92f7b5](https://github.com/datacamp/waffles/commit/e92f7b537a55c56cc5714189fbb254b180d2dc87))
* **icon:** add raw svg icons ([72e3b15](https://github.com/datacamp/waffles/commit/72e3b15ce6be60c1dd4c5fb9436a1287f80f111a))
* **icon:** commit auto generated icons ([161f7ce](https://github.com/datacamp/waffles/commit/161f7ce522231438fd56be04467b6029f155b159))
* **icon:** commit optimized icons ([f8ff012](https://github.com/datacamp/waffles/commit/f8ff012236e8d2ad1f7b68d3d2b95d2359c17015))
* **icon:** commit updated icon components ([aed9307](https://github.com/datacamp/waffles/commit/aed93075e1ad6f2338533c22fa4e0709dab98338))
* **icon:** keep only one facebbok brand icon ([6bdeff5](https://github.com/datacamp/waffles/commit/6bdeff56cfb57072a53df69da480f84fa2135a09))
* **icon:** keep only one linked in brand icon ([85f8857](https://github.com/datacamp/waffles/commit/85f8857241e14dc8c95ceeac0df18f4943b27977))
* **icon:** make size prop optional ([87cf798](https://github.com/datacamp/waffles/commit/87cf79802abd7f9679c6ae2189d78128da743f11))
* **icon:** remove google plus icon ([22c0f83](https://github.com/datacamp/waffles/commit/22c0f83adcbd3d777cd5f241751fa76967ddb4d9))
* **icon:** remove title element ([7717cf9](https://github.com/datacamp/waffles/commit/7717cf9fc2722546ce40474b35d0ce407ffed499))
* **icon:** streamline svg icons files ([04f7e44](https://github.com/datacamp/waffles/commit/04f7e4490aa18a1077a4ddcaf657b2455cecfb2f))
* **icon:** update share icon ([4a26f1e](https://github.com/datacamp/waffles/commit/4a26f1ec011590f86ae1ca998574fb152096a084))
* **workbench:** wrap whole workbench with main component ([68da194](https://github.com/datacamp/waffles/commit/68da19421ced14154cb604c9dc0725ec126c8fd2))

## [0.13.0](https://github.com/datacamp/waffles/compare/v0.12.0...v0.13.0) (2021-08-19)


### Core Changes

* **tokens:** add base design tokens compatible with Figma ([8b2a859](https://github.com/datacamp/waffles/commit/8b2a8595de30642458c020085d84b7e6c5f56936))
* **tokens:** commit auto generated tokens for internal use ([caceb96](https://github.com/datacamp/waffles/commit/caceb96131e3f0cea00d0ad855c9f88657f7ebfe))


### Documentation Changes

* add generate dsign tokens script overview ([320fdd5](https://github.com/datacamp/waffles/commit/320fdd559245edc0a18d149672ac3c4ee55082d1))
* add section about design tokens and icons to dev guide ([211b37c](https://github.com/datacamp/waffles/commit/211b37c69c53349aecc56daded2bcdde961ee56d))
* mention script to generate design tokens ([ff25c4b](https://github.com/datacamp/waffles/commit/ff25c4b4e8875259b7bb1c0c5fccdea58d72d6c9))
* update core principles in dev guide ([93ff9ae](https://github.com/datacamp/waffles/commit/93ff9aecef10ab1eda2ad701fe29f8ba4250b35e))

## [0.12.0](https://github.com/datacamp/waffles/compare/v0.11.0...v0.12.0) (2021-08-18)


### Core Changes

* **button:** use tokens in button ([4aa1d34](https://github.com/datacamp/waffles/commit/4aa1d34597d054a6b16c60e3cd9373ba0040df57))
* **tokens:** implement design tokens ([c9dd36c](https://github.com/datacamp/waffles/commit/c9dd36c3c675c7781b9256d7d638c6a36582c928))
* **tokens:** put tokens groups in separate files ([e73640c](https://github.com/datacamp/waffles/commit/e73640cf28fd2de46c30984300e39b3e4342f36a))


### Documentation Changes

* add available commands and directories overview ([8e67b03](https://github.com/datacamp/waffles/commit/8e67b03aef1cd9f4029d74f22f229ce496494c03))
* add docs about local development ([19dde43](https://github.com/datacamp/waffles/commit/19dde43ce466dde586120aad416f18e65a399de4))
* add links to internal docs to readme ([8b7b23b](https://github.com/datacamp/waffles/commit/8b7b23bf05489f638fbc15b56bf6f3a7d39ca635))
* add project scripts and structure documentation ([d92b2fd](https://github.com/datacamp/waffles/commit/d92b2fda3dba6f8abefcd6da5a3c079e99732c30))
* extend development guide docs ([d795fea](https://github.com/datacamp/waffles/commit/d795feaea8d849680aa53d017f5b1d7130a0103d))
* mention commit types and scopes ([746515c](https://github.com/datacamp/waffles/commit/746515cc3fec6baa27604ed75d935f8d59d61256))
* small project organization doc adjustments ([c3ce95e](https://github.com/datacamp/waffles/commit/c3ce95e5204752f2cb233ec7159eca63df6d5577))
* use tokens in doc-site ([d3cd05c](https://github.com/datacamp/waffles/commit/d3cd05cb18425da193774d80d9ae0c41eb16b8ae))

## 0.11.0 (2021-08-12)


### Bug Fixes

* bump package version ([00e5956](https://github.com/datacamp/waffles/commit/00e5956c26427206af32b8568303bf2fe3699684))
* ci config ([63c4a2e](https://github.com/datacamp/waffles/commit/63c4a2e1cf4a7a322179cdf5ad94ecba0d3bd903))
* commit message in release-it config ([2ca9ed8](https://github.com/datacamp/waffles/commit/2ca9ed8246a49cdc33fe4cdad45f193acba721d3))
* github unknown host during ci ([4e49670](https://github.com/datacamp/waffles/commit/4e49670bc4baccaefe2e97917bf2fca296bbf3e0))
* pass correct env var ([2e7ef31](https://github.com/datacamp/waffles/commit/2e7ef314e78773d09fe7d671cd61c065f108cba0))


### Documentation Changes

* add basic readme ([de7593c](https://github.com/datacamp/waffles/commit/de7593c96b21d9e4cc80d621a144692d03f8bc84))
* update readme ([32a29a2](https://github.com/datacamp/waffles/commit/32a29a271f1f77ad6e4c07705582ba5643786bd3))
* update readme ([818f16d](https://github.com/datacamp/waffles/commit/818f16d02b72464cf7dddb7ccf836aefdbbb48a6))


### Core Changes

* add custom assets ([3e704af](https://github.com/datacamp/waffles/commit/3e704afbf678940f81350f8184dd3eeca0c18c8e))
* add custom optimized fonts ([774bd50](https://github.com/datacamp/waffles/commit/774bd50cb517a76b1bee97be1eac2f960597d333))
* add dummy button component ([cc5a057](https://github.com/datacamp/waffles/commit/cc5a05744281d98509eb440062e4ab200fe8d7e0))
* add emotion to doc-site ([49b1c25](https://github.com/datacamp/waffles/commit/49b1c25003646f5eb35b64af04c875b608ea0901))
* add fonts and favicons to playground ([04c10c5](https://github.com/datacamp/waffles/commit/04c10c5ef34c25ac8b4e6638f590a1780d81e1ec))
* basic doc-site setup ([dfabdf2](https://github.com/datacamp/waffles/commit/dfabdf2337cc945a388c10f8525a43c8197e558b))
* basic playground setup ([284b02c](https://github.com/datacamp/waffles/commit/284b02c2757bc69c4dd61ca0b4f6757635d8ec3d))
* cleanup workbench setup ([b94bd0d](https://github.com/datacamp/waffles/commit/b94bd0d42ff18c39c106074f62331ce020d769d0))
* extend cypress a11y checks and add a11y logger ([a3c5bc3](https://github.com/datacamp/waffles/commit/a3c5bc3f35f0937d84e9761fb01822b3af14705a))
* implement main component with grid background ([670a111](https://github.com/datacamp/waffles/commit/670a111ff5cededc1100c38129e89574df1b2480))
* make doc-site work with emotion ([8f6c060](https://github.com/datacamp/waffles/commit/8f6c060c9c33175d05fef16b66991d1f4a80d9d1))
* set up custom fonts and CSS reset ([f1840a6](https://github.com/datacamp/waffles/commit/f1840a60c95d8053c14cb86b67bbd6e4fa1682ca))
* setup playground entry ([63bccdc](https://github.com/datacamp/waffles/commit/63bccdc8d3c6a16fc97f948e6b16693bc1c53bd2))
* update dummy button example ([17ba3c5](https://github.com/datacamp/waffles/commit/17ba3c574325927af85c42d7ffe5b1197002c0eb))
* update workbench layout ([60a4129](https://github.com/datacamp/waffles/commit/60a4129d6637fcf21ed435cf77e0eec4f0f42376))