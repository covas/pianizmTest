class Tune < ActiveRecord::Base
  attr_accessible :author, :category, :image, :info, :level, :name, :quality, :tags, :url, :views
end
