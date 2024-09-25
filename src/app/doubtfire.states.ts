import {NgHybridStateDeclaration} from '@uirouter/angular-hybrid';
import {InstitutionSettingsComponent} from './admin/institution-settings/institution-settings.component';
import {HomeComponent} from './home/states/home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {SignInComponent} from './sessions/states/sign-in/sign-in.component';
import {EditProfileComponent} from './account/edit-profile/edit-profile.component';
import {TeachingPeriodListComponent} from './admin/states/teaching-periods/teaching-period-list/teaching-period-list.component';
import {AcceptEulaComponent} from './eula/accept-eula/accept-eula.component';
import {FUsersComponent} from './admin/states/f-users/f-users.component';
import {FUnitsComponent} from './admin/states/f-units/f-units.component';
import {ScormPlayerComponent} from './common/scorm-player/scorm-player.component';
import {UnitAnalyticsComponent} from './units/states/analytics/unit-analytics-route.component';
import {firstValueFrom} from 'rxjs';
import {AppInjector} from './app-injector';
import {UnitService} from './api/services/unit.service';

/*
 * Use this file to store any states that are sourced by angular components.
 */

/**
 * Define the institution settings state - used to edit campus data.
 */
const institutionSettingsState: NgHybridStateDeclaration = {
  name: 'institutionsettings', // This is the name of the state to jump to - so ui-sref="institutionsettings" to jump here
  url: '/admin/institution-settings', // You get here with this url
  views: {
    main: {
      // Main body links to angular component
      component: InstitutionSettingsComponent,
    },
  },
  data: {
    pageTitle: 'Institution Settings',
    roleWhiteList: ['Admin'],
  },
};

const usersState: NgHybridStateDeclaration = {
  name: 'admin/users', // This is the name of the state to jump to - so ui-sref="users" to jump here
  url: '/admin/users', // You get here with this url
  views: {
    main: {
      // Main body links to angular component
      component: FUsersComponent,
    },
  },
  data: {
    pageTitle: 'Administer users',
    roleWhiteList: ['Admin'],
  },
};

/**
 * Define the new home state.
 */
const HomeState: NgHybridStateDeclaration = {
  name: 'home',
  url: '/home',
  views: {
    main: {
      component: HomeComponent,
    },
  },
  data: {
    pageTitle: 'Home Page',
    roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin', 'Auditor'],
  },
};

// const unitParentState: NgHybridStateDeclaration = {
//   name: 'units',
//   url: '/units/:unit_id',
//   // template for the parent state
//   views: {
//     main: {
//       component: IndexComponent,
//     },
//   },
//   resolve: {
//     unit: function ($stateParams) {
//       const unitService = AppInjector.get(UnitService);
//       const globalState = AppInjector.get(GlobalStateService);
//       globalState.onLoad(() => {});
//       console.log($stateParams);
//       unitService.query({ id: $stateParams.unit_id }).subscribe((unit) => {
//         console.log($stateParams.unit_id);
//         console.log(unit);
//         return unit;
//       });
//     },
//     unitRole: function ($stateParams) {
//       const globalStateService = AppInjector.get(GlobalStateService);

//       globalStateService.unitRolesSubject.subscribe((unitRoles) => {
//         return unitRoles.find((unitRole) => unitRole.id === $stateParams.unit_id);
//       });
//     },
//   },
// };

/**
 * Define the new home state.
 */
// const InboxState: NgHybridStateDeclaration = {
//   name: 'inbox',
//   url: '/units/:unit_id/inbox/:task_key',

//   params: {
//     // unitRole: UnitRole,
//     // taskKey: null,
//     // taskData:
//     // unit,
//   },
//   views: {
//     main: {
//       component: InboxComponent,
//     },
//   },
//   data: {
//     task: 'Task Inbox',
//     pageTitle: '_Home_',
//     roleWhitelist: ['Tutor', 'Convenor', 'Admin'],
//   },
//   resolve: {
//     unit$: function ($stateParams) {
//       const unitService = AppInjector.get(UnitService);
//       const globalState = AppInjector.get(GlobalStateService);
//       globalState.onLoad(() => {});
//       console.log($stateParams);
//       return unitService.get({ id: $stateParams.unit_id });
//     },
//     unitRole$: function ($stateParams) {
//       const globalStateService = AppInjector.get(GlobalStateService);

//       const result = globalStateService.loadedUnitRoles.values.pipe(
//         map((unitRoles) => unitRoles.find((unitRole) => unitRole.id == $stateParams.unit_id))
//       );
//       return result;
//     },
//     taskData$: function () {
//       const taskService = AppInjector.get(TaskService);
//       const taskData = {
//         taskKey: null,
//         source: null,
//         selectedTask: null,
//         onSelectedTaskChange: (task) =>{
//           const taskKey = task?.taskKey()
//           $scope.taskData.taskKey = taskKey
//           setTaskKeyAsUrlParams(task);
//         }
//       }
//       taskData.source = taskService.queryTasksForTaskInbox.bind(taskService);
//       taskData.taskDefMode = false;
//       return of(taskData);
//     },
//   },
// };

/**
 * Define the welcome state.
 */
const WelcomeState: NgHybridStateDeclaration = {
  name: 'welcome',
  url: '/welcome',
  views: {
    main: {
      component: WelcomeComponent,
    },
  },
  data: {
    pageTitle: 'Welcome',
    roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin', 'Auditor'],
  },
};

/**
 * Define the Sign In state.
 */
const SignInState: NgHybridStateDeclaration = {
  name: 'sign_in',
  url: '/sign_in?dest&params&authToken&username',
  views: {
    main: {
      component: SignInComponent,
    },
  },
  data: {
    pageTitle: 'Sign In',
  },
};

/**
 * Define the Edit Profile state.
 */
const EditProfileState: NgHybridStateDeclaration = {
  name: 'edit_profile',
  url: '/edit_profile',
  views: {
    main: {
      component: EditProfileComponent,
    },
  },
  data: {
    pageTitle: 'Edit Profile',
    roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin', 'Auditor'],
  },
};

const TeachingPeriodsState: NgHybridStateDeclaration = {
  name: 'teaching_periods',
  url: '/admin/teachingperiods',
  views: {
    main: {
      component: TeachingPeriodListComponent,
    },
  },
  data: {
    pageTitle: 'Teaching Periods',
    roleWhitelist: ['Convenor', 'Admin'],
  },
};

const EulaState: NgHybridStateDeclaration = {
  name: 'eula',
  url: '/eula',
  views: {
    main: {
      component: AcceptEulaComponent,
    },
  },
  data: {
    pageTitle: 'End User License Agreement',
    roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin', 'Auditor'],
  },
};

const ViewAllProjectsState: NgHybridStateDeclaration = {
  name: 'view-all-projects',
  url: '/view-all-projects',
  resolve: {
    'mode': function () {
      return 'student';
    },
  },
  views: {
    main: {
      component: FUnitsComponent,
    },
  },
  data: {
    pageTitle: 'Teaching Periods',
    roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin'],
  },
};

const AdministerUnits: NgHybridStateDeclaration = {
  name: 'admin/units', // This is the name of the state to jump to - so ui-sref="users" to jump here
  url: '/admin/units', // You get here with this url
  resolve: {
    'mode': function () {
      return 'admin';
    },
  },
  views: {
    main: {
      // Main body links to angular component
      component: FUnitsComponent,
    },
  },
  data: {
    pageTitle: 'Administer units',
    roleWhiteList: ['Admin'],
  },
};

const ViewAllUnits: NgHybridStateDeclaration = {
  name: 'view-all-units',
  url: '/view-all-units',
  // passes 'mode' as @Input to the component
  resolve: {
    'mode': function () {
      return 'tutor';
    },
  },
  views: {
    main: {
      component: FUnitsComponent,
    },
  },
  data: {
    pageTitle: 'Teaching Periods',
    mode: 'tutor',
    roleWhitelist: ['Tutor', 'Convenor', 'Admin'],
  },
};


const AnalyticsState: NgHybridStateDeclaration = {
  name: 'units/analytics',
  url: '/units/:unitId/analytics',
  resolve: {
    unit: async function ($stateParams: {unitId: number}) {
      const unitService = AppInjector.get(UnitService);
      return await firstValueFrom(unitService.get($stateParams.unitId));
    },
  },
  views: {
    main: {
      component: UnitAnalyticsComponent,
    },
  },
  data: {
    task: 'Unit Analytics',
    pageTitle: '_Home_',
    roleWhitelist: ['Tutor', 'Convenor', 'Admin', 'Auditor']
  },
};


/**
 * Define the SCORM Player state.
 */
const ScormPlayerNormalState: NgHybridStateDeclaration = {
  name: 'scorm-player-normal',
  url: '/projects/:project_id/task_def_id/:task_definition_id/scorm-player/normal',
  resolve: {
    projectId: [
      '$stateParams',
      function ($stateParams: {project_id: number}) {
        return $stateParams.project_id;
      }
    ],
    taskDefId: [
      '$stateParams',
      function ($stateParams: {task_definition_id: number}) {
        return $stateParams.task_definition_id;
      }
    ],
    mode: function () {
      return 'normal';
    },
  },
  views: {
    main: {
      component: ScormPlayerComponent,
    },
  },
  data: {
    pageTitle: 'Knowledge Check',
    roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin'],
  },
};

/**
 * Define the SCORM Player state.
 */
const ScormPlayerStudentReviewState: NgHybridStateDeclaration = {
  name: 'scorm-player-student-review',
  url: '/projects/:project_id/task_def_id/:task_definition_id/scorm-player/review/:test_attempt_id',
  resolve: {
    projectId: [
      '$stateParams',
      function ($stateParams) {
        return $stateParams.project_id;
      }
    ],
    taskDefId: [
      '$stateParams',
      function ($stateParams) {
        return $stateParams.task_definition_id;
      }
    ],
    testAttemptId: [
      '$stateParams',
      function ($stateParams) {
        return $stateParams.test_attempt_id;
      }
    ],
    mode: function () {
      return 'review';
    },
  },
  views: {
    main: {
      component: ScormPlayerComponent,
    },
  },
  data: {
    pageTitle: 'Review Knowledge Check',
    roleWhitelist: ['Student', 'Tutor', 'Convenor', 'Admin'],
  },
};

const ScormPlayerReviewState: NgHybridStateDeclaration = {
  name: 'scorm-preview',
  url: '/task_def_id/:task_definition_id/preview-scorm',
  resolve: {
    taskDefId: [
      '$stateParams',
      function ($stateParams) {
        return $stateParams.task_definition_id;
      }
    ],
    mode: function () {
      return 'preview';
    },
  },
  views: {
    main: {
      component: ScormPlayerComponent,
    },
  },
  data: {
    pageTitle: 'Preview Scorm Test',
    roleWhitelist: ['Tutor', 'Convenor', 'Admin'],
  },
};

/**
 * Export the list of states we have created in angular
 */
export const doubtfireStates = [
  institutionSettingsState,
  TeachingPeriodsState,
  HomeState,
  WelcomeState,
  SignInState,
  EditProfileState,
  EulaState,
  usersState,
  ViewAllProjectsState,
  ViewAllUnits,
  AdministerUnits,
  ScormPlayerNormalState,
  ScormPlayerReviewState,
  ScormPlayerStudentReviewState,
  AnalyticsState,
];
