Mise en place is a French term for having all your ingredients measured, cut, peeled, sliced, grated, etc, before you start cooking. In the same light, *Mise UI* is a design system and component library for America’s Test Kitchen.

The current state of the master branch can be viewed here: https://mise-ui.netlify.com

### To start the app:
Run `yarn run storybook` and wait for a browser window to open `localhost:9009`

### Storybook
Mise UI is a [Storybook](https://storybook.js.org) app built with [React](https://reactjs.org). Storybook is an isolated UI development environment for UI components. Stories are written in [Component Story Format (CSF)](https://storybook.js.org/docs/formats/component-story-format).

### Visual review
To review work with others, push your branch to `origin/staging`. Netlify will build and deploy to http://staging--mise-ui.netlify.com. The master branch is always viewable here: https://mise-ui.netlify.com

### Workflow

#### Create a branch
```git checkout -b create-avatar-list-component```

#### Code and commit
```git commit -am "Added AvatarList and stories"```

#### Document your code

Add comments to your components which Storybook will use as documentation.

For example:

```
/**
 * A list of Avatars, ellipsized to at most 3. Supports passing only a subset of the total user count.
 */
export function AvatarList({ loading, users, userCount, size, ...props }) {
}

AvatarList.propTypes = {
  /**
   * Are we loading avatar data from the network?
   */
  loading: PropTypes.bool,
  /**
   * A (sub)-list of the users whose avatars we have data for. Note: only 3 will be displayed.
   */
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    })
  ),
  /**
   * The total number of users, if a subset is passed to `users`.
   */
  userCount: PropTypes.number,
  /**
   * AvatarList comes in four sizes. In most cases, you’ll be fine with `medium`.
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
};
```

Commit the changes and push to GitHub
```
git commit -am "Improved AvatarList docs"
git push -u origin `create-avatar-list-component`
```

### Create a PR

Create a Pull Request

The design system’s Storybook is automatically published each pull request to make review dead simple.
Scroll down to the PR checks, at the bottom of the PR, to find a link to the deployed Storybook.

You should look for something like `deploy/netlify - Deploy preview ready`

The online Storybook is a universal reference point for the team. Share the link to AvatarList with other stakeholders to get feedback faster.

#### Verify changes via tests

* Chromatic?
* Snapshots?
* Unit tests?

#### Distribute

When tests pass, stakeholders have reviewed and approved and other devs have given thumbs up it's time for the release.

To make sure the release is versioned properly on NPM, you will leverage labels on GitHub. Auto provides a list of labels that will affect
whether a new NPM release is a patch, minor or major release. Unsurprisingly, these labels are `patch`, `minor`, `major`. The full list of
labels can be found [here](https://github.com/Americastestkitchen/mise-ui/labels).

For example:
Add the `minor` label to the PR. This tells Auto to update the minor version of the package on merge.

Labels are located in the right hand column of the PR.

Next, merge your PR, and navigate to your package on npm and hang tight for a few minutes while the package is updated.

## Previewing in `jarvis`, or other ATK repos with yalc

When developing and authoring multiple packages (private or public), you often find yourself in need of using the latest/WIP versions in other projects that you are working on in your local environment without publishing those packages to the remote registry.

See [documentation](https://github.com/wclr/yalc) for more info

Install `yalc` globally

```
yarn global add yalc
```
Now run publish, it will copy all the files that should be published in remote NPM registry
```
yalc publish
```
With yalc puclished in remote NPM registry, it's already visible to other repos. But if you want to continue the changes in mise-ui run the following
```
yarn watch
```

Then add the following to any other **ATK repos** that would want to see the changes. It will automatically see the changes and update in the application(It might take some seconds)
```
cd ../jarvis
yalc link @atk/mise-ui
```

Now just start the repo's development server and it's all set.

When you are done working on `mise-ui` changes, you might want to 'remove' jarvis.
```
cd ../jarvis
yalc remove @atk/mise-ui
```

## DEPRECATED - Previewing in `jarvis`, or other ATK repos

If you are making changes in `mise-ui` and would like to preview those changes immediately in `jarvis`, you will need to link your local copy of `mise-ui` to your local `jarvis`.

The following commands assume your local repos are stored in `/src`, adjust the commands to suite the location you have selected on your computer.

```
-$ cd /src/mise-ui
-$ yarn link
-$ npm link ../jarvis/node_modules/react-instantsearch-dom
-$ npm link ../jarvis/node_modules/react
-$ npm link ../jarvis/node_modules/styled-components
-$ npm link ../jarvis/node_modules/styled-components-breakpoint
-$ cd ../jarvis
-$ yarn link @atk/mise-ui
-$ cd node_modules/styled-components
-$ npm link ../react
```

Note that two of the above commands use `yarn` and two use `npm`. The order of the `npm` commands is important. Make sure you link `react-instantsearch-dom` and then `react`. If you see 'Invalid Hook Call' errors, you might need to re-run these commands with the correct order.

The `link` commands create symlinks between your local `mise-ui` and `jarvis` so that the `node_modules` folder in `jarvis` points to your local `mise-ui` codebase. The `npm link` commands make it so that `jarvis` uses its local copies of the packages (`react` and `react-instantsearch-dom`) instead of using the versions in the `mise-ui/node_modules` folder.

Read [Invalid Hook Call Warning](https://reactjs.org/warnings/invalid-hook-call-warning.html) for more details.

After each change that you make in `mise-ui`, you will need to compile your code since `jarvis` looks at the files in `./dist`, not in `./src`.
```
-$ yarn run build
```

You will also need to restart `jarvis`.

When you are done working on `mise-ui` changes, you might want to 'unlink' jarvis.
```
-$ cd /src/jarvis
-$ yarn unlink @atk/mise-ui
-$ yarn add @atk/mise-ui
```
Your `jarvis` branch should now be pointing to the lastest NPM version of `atk/mise-ui`.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/leo-fsl"><img src="https://avatars.githubusercontent.com/u/94620909?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leonardo</b></sub></a><br /><a href="#example-leo-fsl" title="Examples">💡</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=leo-fsl" title="Tests">⚠️</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=leo-fsl" title="Code">💻</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=leo-fsl" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/harry-atk"><img src="https://avatars.githubusercontent.com/u/88331810?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Harry Scheuerle</b></sub></a><br /><a href="#example-harry-atk" title="Examples">💡</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=harry-atk" title="Code">💻</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=harry-atk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jaslakson"><img src="https://avatars.githubusercontent.com/u/17276211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jason Aslakson</b></sub></a><br /><a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=jaslakson" title="Code">💻</a> <a href="#example-jaslakson" title="Examples">💡</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=jaslakson" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/kayseriatk"><img src="https://avatars.githubusercontent.com/u/95244777?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kayseri Martinez</b></sub></a><br /><a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=kayseriatk" title="Documentation">📖</a> <a href="#example-kayseriatk" title="Examples">💡</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=kayseriatk" title="Tests">⚠️</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=kayseriatk" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ttornese"><img src="https://avatars.githubusercontent.com/u/2482369?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tom Tornese</b></sub></a><br /><a href="#example-ttornese" title="Examples">💡</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=ttornese" title="Code">💻</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=ttornese" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/twoodmanATK"><img src="https://avatars.githubusercontent.com/u/91677751?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tim Woodman</b></sub></a><br /><a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=twoodmanATK" title="Code">💻</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=twoodmanATK" title="Documentation">📖</a> <a href="#example-twoodmanATK" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/oddwili"><img src="https://avatars.githubusercontent.com/u/6622568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Audrey Magwili</b></sub></a><br /><a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=oddwili" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/tdorin"><img src="https://avatars.githubusercontent.com/u/104532100?v=4?s=100" width="100px;" alt=""/><br /><sub><b>tdorin</b></sub></a><br /><a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=tdorin" title="Documentation">📖</a> <a href="#example-tdorin" title="Examples">💡</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=tdorin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jwinnfeild2517"><img src="https://avatars.githubusercontent.com/u/46112853?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jenner Thomas</b></sub></a><br /><a href="#example-jwinnfeild2517" title="Examples">💡</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=jwinnfeild2517" title="Tests">⚠️</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=jwinnfeild2517" title="Code">💻</a> <a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=jwinnfeild2517" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jbonAA"><img src="https://avatars.githubusercontent.com/u/52093281?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jess David Bon</b></sub></a><br /><a href="https://github.com/americastestkitchen/americastestkitchen/mise-ui/commits?author=jbonAA" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
