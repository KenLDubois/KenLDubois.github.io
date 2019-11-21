/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

import data from './data/projects.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: [],
        activeProject: null,
        allTags: [],
        filterTags: [],
    },
    mutations: {
        updateProjects(state, projects){
            state.projects = projects;
        },
        updateAllTags(state, tags){
            state.allTags = tags.sort();
        },
        updateActiveProject(state, project){
            state.activeProject = project
        },
        updateFilterTags(state, tags){
            state.filterTags = tags;
        }
    },
    actions: {
        async getProjects({commit}) {
            let pdata = await data;

            var projects = pdata.data;

            if(this.state.filterTags.length == 0){
                commit('updateProjects',projects)
            }
            else {

                var filteredProjects = [];

                for(var i = 0; i < projects.length; i++){
                    for(var j = 0; j < this.state.filterTags.length; j++){
                        if(projects[i].tags.includes(this.state.filterTags[j])){
                            filteredProjects.push(projects[i])
                            break
                        }
                    }
                    
                }
    
                commit('updateProjects', filteredProjects)

            }
            
        },

        async getProject({commit},projectId){
            
            var project = data.data.find(function(el) {
                return el.id == projectId
            })

            commit('updateActiveProject', project)
        },
        async getTags({commit}){
            var allTags = [];
            var uniqueTags = [];
            let projects = await data;

            for(var i = 0; i < projects.data.length; i++){
                var iTags =  projects.data[i].tags

                for(var j = 0; j < iTags.length; j++){
                    if(!allTags.includes(iTags[j])){
                        allTags.push(iTags[j])
                        
                        uniqueTags.push(iTags[j])

                        // uniqueTags.push({
                        //     name: iTags[j],
                        //     showTag: true
                        // })
                    }
                }
            }
            commit('updateAllTags', uniqueTags)
        },
        setFilterTags({commit}, tagsArray){
            commit('updateFilterTags', tagsArray)
        }
    }
}) 