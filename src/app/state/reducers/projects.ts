import { ProjectsActions } from '../actions/index';
import { WorldBankDto } from '../../core/domain/world-bank';

export function projectsReducer(state: WorldBankDto[] = [], action: ProjectsActions.All): WorldBankDto[] {
  switch (action.type) {
    case ProjectsActions.LOAD: {
      return (<ProjectsActions.Load>action).projects;
    }

    case ProjectsActions.CREATE: {
      return [...state, (<ProjectsActions.Create>action).project];
    }

    case ProjectsActions.UPDATE: {
      const projectToUpdate = (<ProjectsActions.Update>action).project;
      return state.map((project: WorldBankDto) => project.id === projectToUpdate.id ?
        projectToUpdate : project);
    }

    case ProjectsActions.CREATE_OR_UPDATE: {
      const projectFromAction = (<ProjectsActions.CreateOrUpdate>action).project;
      const existing = state.find((project: WorldBankDto) => project.id === projectFromAction.id);
      if (existing) {
        return projectsReducer(state, new ProjectsActions.Update(projectFromAction));
      } else {
        return projectsReducer(state, new ProjectsActions.Create(projectFromAction));
      }
    }

    case ProjectsActions.DELETE: {
      const projectFromAction = (<ProjectsActions.Delete>action).project;
      return state.filter((project: WorldBankDto) => project.id !== projectFromAction.id);
    }

    case ProjectsActions.DELETE_ALL: {
      return [];
    }

    default: {
      return state;
    }
  }
}
