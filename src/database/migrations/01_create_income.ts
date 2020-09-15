import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('income', table => {
        table.increments('id').primary();
        table.integer('category_id')
            .notNullable()
            .references('id')
            .inTable('category')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('name').notNullable();
        table.decimal('value').notNullable();
        table.date('date').notNullable().defaultTo(knex.fn.now());
        table.dateTime('register_date').notNullable().defaultTo(knex.fn.now());

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('income');
}