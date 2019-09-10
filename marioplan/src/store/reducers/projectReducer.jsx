const initState = {
	projects: [
		{id: '1', title: 'help me find peach', content: 'fa fa fa fa fa'},
		{id: '2', title: 'collect all the stars', content: 'fa fa fa fa fa'},
		{id: '3', title: 'egg hunt with yoshi', content: 'fa fa fa fa fa'}
	]
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project)
	}
	return state
}

export default projectReducer;