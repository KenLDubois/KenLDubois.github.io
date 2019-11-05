/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

import data from './data/projects.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: [],
        activeProject: null,
    },
    mutations: {
        updateProjects(state, projects){
            state.projects = projects;
        },
        updateAllTags(state, tags){
            state.allTags = tags;
        },
        updateActiveProject(state, project){
            state.activeProject = project
        }
    },
    actions: {
        async getProjects({commit}) {
            let projects = await data;
            commit('updateProjects', projects.data)
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
                        uniqueTags.push(iTags[j])

                        allTags.push({
                            name: iTags[j],
                            showTag: false
                        })
                    }
                }
            }
            commit('updateAllTags', allTags)
        }
    }
}) 