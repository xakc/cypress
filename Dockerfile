FROM cypress/included:6.4.0

COPY . .


RUN npm install
RUN npm run  trigger-regressionTests



