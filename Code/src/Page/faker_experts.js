import faker from 'faker'
const fakerExperts=[
	{
		"key": 0,
		"avatar"    :faker.image.avatar(),
	    "firstName" :faker.name.firstName(),
		"jobArea"  :faker.name.jobArea(),
	},
	{
		"key": 1,
		"avatar"    :faker.image.avatar(),
	    "firstName" :faker.name.firstName(),
		"jobArea"  :faker.name.jobArea(),
	},
	{   "key": 2,
		"avatar"    :faker.image.avatar(),
	    "firstName" :faker.name.firstName(),
		"jobArea"  :faker.name.jobArea(),
	}
]

export default fakerExperts