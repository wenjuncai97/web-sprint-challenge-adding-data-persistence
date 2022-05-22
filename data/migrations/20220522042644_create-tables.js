/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.varchar('project_name', 128).notNullable()
        tbl.varchar('project_description', 256)
        tbl.boolean('project_completed').notNullable().defaultTo(false)
    })

    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.varchar('resource_name', 128).notNullable().unique()
        tbl.varchar('resource_description', 128)
    })

    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.varchar('task_description', 256).notNullable()
        tbl.varchar('task_notes', 256)
        tbl.boolean('task_completed').notNullable().defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })

    .createTable('project_resources', tbl => {
        tbl.increments('project_resource_id')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
        tbl
            .integer("resource_id")
            .unsigned()
            .notNullable()
            .references("resource_id")
            .inTable("resources");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
