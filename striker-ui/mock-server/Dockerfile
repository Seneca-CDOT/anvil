FROM node:lts-alpine as build

RUN apk add --no-cache tini

WORKDIR '/server'

COPY package.json .

# Context: Dependencies
FROM build AS dependencies

RUN npm install --no-package-lock

# -------------------------------------
# Context: Builder
FROM dependencies AS builder

# Copy necessary files to build the server
COPY src src
COPY tsconfig.json .
COPY .eslintrc.json .
COPY .eslintignore .

RUN npm run build

# -------------------------------------
# Context: Release
FROM build AS release

# GET build and dependencies from previous containers
COPY --from=dependencies /server/node_modules /server/node_modules
COPY --from=builder /server/dist /server/dist
COPY data /server/data

# Copy the front-end
COPY build /server/build

# Deploy the server
CMD ["sh", "-c", "node dist"]