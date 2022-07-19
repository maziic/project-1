### Scripts

- Install: `npm install`
- Build: `npm run build`
- Lint: `npm run lint`
- Prettify: `npm run prettify`
- Run unit tests: `npm run test`
- Start server: `npm run start`

### Endpoint

http://localhost:3000/

Expected query arguments are:

- name
- width
- height

#### Example 1

http://localhost:3000/
Displays a welcome message with instructions to create thumbnail

#### Example 2

http://localhost:3000/filename=eyes
Displays image in original size

#### Example 3

http://localhost:3000/filename=eyes&width=800&height=800
Creates a thumbnail with provided size, stores and returns it

### Notes

Images are contained inside assets/images.
Images are of type jpg.
You can add other jpg images by simply adding them to this folder. available images in static folder:

- dice
- eyes
- monster
- ocean
- plane
