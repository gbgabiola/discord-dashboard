
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    getUser(): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    discordId: string;
    username: string;
    avatar?: Nullable<string>;
    discriminator: string;
    guilds?: Nullable<Nullable<Guild>[]>;
}

export interface Guild {
    id: string;
    name: string;
    icon?: Nullable<string>;
    description?: Nullable<string>;
    banner?: Nullable<string>;
    owner_id?: Nullable<string>;
    roles?: Nullable<Nullable<Role>[]>;
}

export interface Role {
    id: string;
    name: string;
    permission: string;
    position: number;
    color: number;
}

type Nullable<T> = T | null;
