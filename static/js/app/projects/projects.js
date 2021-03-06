// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

angular.module('projects', ['resources.projects', 'services.breadcrumbs', 'services.pluginsProvider']).
config(['pluginsProvider', function(pluginsProvider){
    pluginsProvider.register('Projects', '/projects', {
        controller: 'ProjectsListCtrl',
        templateUrl: 'table.html',
        resolve: {
            projects: function(Projects){
                return Projects.getAll();
            }
        }
    })
}]);

angular.module('projects').controller('ProjectsListCtrl', ['$scope', 'projects', 'Breadcrumbs', function($scope, projects, Breadcrumbs){
    Breadcrumbs.refresh();
    Breadcrumbs.push('Projects', '/#/projects');
    $scope.collection = projects;
    $scope.toDisplay = ['name', 'displaytext', 'domain', 'account', 'state']
}]);
