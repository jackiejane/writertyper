# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_10_220137) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.string "biography"
    t.string "controversy"
  end

  create_table "scores", force: :cascade do |t|
    t.string "username"
    t.integer "word_per_minute"
    t.decimal "accuracy"
    t.integer "estimate"
    t.integer "score"
    t.bigint "text_id", null: false
    t.index ["text_id"], name: "index_scores_on_text_id"
  end

  create_table "texts", force: :cascade do |t|
    t.string "title"
    t.integer "words"
    t.integer "characters"
    t.string "author"
    t.string "content"
    t.bigint "author_id", null: false
    t.index ["author_id"], name: "index_texts_on_author_id"
  end

  add_foreign_key "scores", "texts"
  add_foreign_key "texts", "authors"
end
