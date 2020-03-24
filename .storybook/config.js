import { configure } from '@storybook/vue'

import Vue from 'vue'

function loadStories () {
	const stories = require.context('./../src/stories/', false, /\.js$/)
	stories.keys().forEach(stories)
}

configure(loadStories, module)