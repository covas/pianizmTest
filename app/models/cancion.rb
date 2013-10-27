class Cancion < ActiveRecord::Base
  attr_accessible :author, :category, :image, :info, :level, :quality, :tags, :views
end
