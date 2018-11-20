# Browse Together

A browser extension to view websites together, in real time. No set up
required, just install the extension and share a link with your peer.

## Install

* [Add to Firefox](https://addons.mozilla.org/en-US/firefox/addon/browse-together/)

## What it does

The real-time part is done by Mozilla's TogetherJS. This extension just ships it, inserts it into an arbitrary page and allows to start a session.

Unlike a browser tab sync plugin, it doesn't require a user account with
the browser vendor

Unlike a screen sharing solution, it should only share the commands, not
a video feed, and thus should be much more responsive while requiring
less bandwidth.

Unlike "customer support" kind of applications, the main use case is remote pair programming.

It's like a shared tmux + vim session, but for stack overflow :)

## Status

Proof of Concept / Work in progress

## Future plans

### Feature set: MVP

1)  [x] Create an extension that includes TogetherJS in every page
1)  [x] Add a menu item that starts TogetherJS
1)  [x] Ship it

### Feature set: rowse across hosts

1)  [ ] Preserve session across page navigations (different hosts)

    This should be possible by the following steps (tried out successfully by manual testing)
    * Intercepting the navigation event
    * Memorizing TogetherJS's session (it uses localStorage)
    * When the new page has loaded, insert the TogetherJS session
    * The peer should

### More features

1)  Browse together in all tabs of the window, not just one
1)  Make it more convenient to follow (auto-follow)

### Biggest risks

1) Behavior of TogetherJS on different pages
1) Content security policy
1) TogetherJS quirks and incompatibilities on certain pages

### Observed TogetherJS quirks and incompatibilities

1) On some pages, clicks aren't synced
1) How does it behave on pages with login? e.g. jira
1) What if the page state get
1) iframe support?


### Alternatives

* [surfly](https://www.surfly.com/)
