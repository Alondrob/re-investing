# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://realty-mole-property-api.p.rapidapi.com/saleListings?city=Austin&state=TX")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-host"] = 'realty-mole-property-api.p.rapidapi.com'
request["x-rapidapi-key"] = '4f49e44fe5mshb356fb96b2bc15ap109f78jsne88cc1e9d543'

response = http.request(request)
puts response.read_body