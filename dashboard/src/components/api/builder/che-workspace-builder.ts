/*
 * Copyright (c) 2015-2017 Red Hat, Inc.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
'use strict';
import IWorkspaceEnvironment = che.IWorkspaceEnvironment;

export interface IWorkspaceAttributes {
  created: number;
  updated?: number;
  [propName: string]: string | number;
}

/**
 * This class is providing a builder for Workspace
 * @author Florent Benoit
 */
export class CheWorkspaceBuilder {
  private workspace: che.IWorkspace;

  constructor() {
    this.workspace = {
      temporary: false,
      config: {
        environments: {},
        projects: []
      }
    };
  }

  withName(name: string): CheWorkspaceBuilder {
    this.workspace.config.name = name;
    return this;
  }

  withId(id: string): CheWorkspaceBuilder {
    this.workspace.id = id;
    return this;
  }

  withAttributes(attributes: IWorkspaceAttributes): CheWorkspaceBuilder {
    this.workspace.attributes = attributes;
    return this;
  }

  withTemporary(temporary: boolean): CheWorkspaceBuilder {
    this.workspace.temporary = temporary;
    return this;
  }

  withRuntime(runtime: any): CheWorkspaceBuilder {
    this.workspace.runtime = runtime;
    return this;
  }

  withNamespace(namespace: string): CheWorkspaceBuilder {
    this.workspace.namespace = namespace;
    return this;
  }

  withStatus(status: string): CheWorkspaceBuilder {
    this.workspace.status = status;
    return this;
  }

  withDefaultEnvironment(defaultEnv: string): CheWorkspaceBuilder {
    this.workspace.config.defaultEnv = defaultEnv;
    return this;
  }

  withEnvironments(environments: {[envName: string]: IWorkspaceEnvironment}): CheWorkspaceBuilder {
    this.workspace.config.environments = environments;
    return this;
  }

  build(): che.IWorkspace {
    return this.workspace;
  }

}

