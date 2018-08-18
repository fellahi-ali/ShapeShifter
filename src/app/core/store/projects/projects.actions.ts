import { Action } from '@ngrx/store';
import { QueryFn } from 'angularfire2/firestore';
import { Project } from 'app/shared/models/firestore';

export enum ProjectsActionTypes {
  Query = '[projects] Query',
  Create = '[projects] Create',
  Update = '[projects] Update',
  Delete = '[projects] Delete',
  Added = '[projects] Added',
  Modified = '[projects] Modified',
  Removed = '[projects] Removed',
  Success = '[projects] Success',
  Failure = '[projects] Failure',
  SetProjects = '[projects] SetProjects',
}

export class Query implements Action {
  readonly type = ProjectsActionTypes.Query;
  constructor(readonly queryFn?: QueryFn) {}
}

export class Create implements Action {
  readonly type = ProjectsActionTypes.Create;
  constructor(readonly project: Project) {}
}

export class Update implements Action {
  readonly type = ProjectsActionTypes.Update;
  constructor(readonly projectId: string, readonly changes: Partial<Project>) {}
}

export class Delete implements Action {
  readonly type = ProjectsActionTypes.Delete;
  constructor(readonly projectId: string) {}
}

export class Added implements Action {
  readonly type = ProjectsActionTypes.Added;
  constructor(readonly project: Project) {}
}

export class Modified implements Action {
  readonly type = ProjectsActionTypes.Modified;
  constructor(readonly project: Project) {}
}

export class Removed implements Action {
  readonly type = ProjectsActionTypes.Removed;
  constructor(readonly project: Project) {}
}

export class Success implements Action {
  readonly type = ProjectsActionTypes.Success;
}

export class Failure implements Action {
  readonly type = ProjectsActionTypes.Failure;
}

export class SetProjects implements Action {
  readonly type = ProjectsActionTypes.SetProjects;
  constructor(readonly projects: Project[]) {}
}

export type ProjectsActions =
  | Query
  | Create
  | Update
  | Delete
  | Added
  | Modified
  | Removed
  | Success
  | Failure
  | SetProjects;
