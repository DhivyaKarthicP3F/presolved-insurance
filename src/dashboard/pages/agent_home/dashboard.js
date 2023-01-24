import React from 'react'
import { Card,  Row, Col, Statistic, Result, Empty } from 'antd';
import ActiveCallPage, { RenderCustomer360 } from '../call_page';
import { customer360 } from '../../mock/customerProfiles';
const AgentDashboard = () => {
    return (
        <section className='agent_dashboard'>
            <Result 
           title="Please wait while we load the dashboard . . ."
           subTitle="This may take a few seconds"
           icon={<Empty />}
              /> 
          {/* <ActiveCallPage {...activeCall} /> */}
        </section>
    )
}

export default AgentDashboard




const activeCall={
    isActive: true,
    contactId: 'c44f4e9a-9659-4710-b62f-59f72e67a7de',
    initialContactId: null,
    type: 'chat',
    state: {
      type: 'connected',
      timestamp: '2023-01-24T05:33:11.504Z'
    },
    queue: {
      queueARN: 'arn:aws:connect:us-east-1:039289871235:instance/78e878e8-2ffd-4183-b1a8-8ca60d65a9ad/queue/b5c6ce6e-ed86-48c5-a3a5-fb7ae25d1500',
      name: 'BasicQueue',
      queueId: 'arn:aws:connect:us-east-1:039289871235:instance/78e878e8-2ffd-4183-b1a8-8ca60d65a9ad/queue/b5c6ce6e-ed86-48c5-a3a5-fb7ae25d1500'
    },
    queueTimestamp: null,
    connections: [
      {
        connectionId: '8d8fb61b-79c7-490d-98d7-9ccf163b29dc',
        endpoint: {
          endpointARN: null,
          type: 'agent',
          name: null,
          phoneNumber: null,
          agentLogin: null
        },
        state: {
          type: 'connected',
          timestamp: '2023-01-24T05:33:11.504Z'
        },
        type: 'agent',
        initial: false,
        chatMediaInfo: {
          chatAutoAccept: false,
          connectionData: '{"ConnectionAuthenticationToken":"QVFJREFIZzI0N0RNMnY2aVBPWXdGaHBzL1Bib0tZSWVZN2VhWEJyUTcwOG5rdnY5c2dINWM3ZjVoZ1N5WjVhUXRUYjUyTUJBQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNYktab2dYM2dLbnc0K0pRZUFnRVFnQ3Q2TUhHZmRwYWM3RzRkWCthQUJuMEJBaEdqMjkzMHdsampTRVdHNUpRbFFNL2xETjRaNDhiUG04ano6OlJ6ek9UU0xpbjl6L0drbUFWd2t1MVoyTGNqcEl2cThTeFFrR3hHVHNBcFNBdy9meFllYnJ2OThPWVo4b0thVHMraHVtUnhZNCtKMnQvNzMrT0ZIc2JvM01pNHNWYlV1M0VSRWVidmRnZlVMcXRjaytiVDEzUEx4MFcvZ3VUcmZ5Sisvdy92OGx1cVloRkI0bFV6bGlhSnBTR1l6amRDTkVwRWE4N2NuVlhWRU1zQkl1Nzk5amtHcEk0S1QyRzRXOTVVeGlPT3VxRzg4L1RpbVV2amhXdGJZWXNoTXNBN2NUOEdXOVNRPT0=","Expiry":"2023-01-31T05:33:06.963Z"}',
          customerName: null
        },
        mute: null,
        forcedMute: null,
        quickConnectName: null,
        monitorStatus: null,
        address: {
          endpointARN: null,
          type: 'agent',
          name: null,
          phoneNumber: null,
          agentLogin: null
        }
      },
      {
        connectionId: 'f177180c-6bb9-4e7f-a735-7ef9b063bdd3',
        state: {
          type: 'connected',
          timestamp: '2023-01-24T05:33:11.504Z'
        },
        type: 'inbound',
        initial: true,
        chatMediaInfo: {
          chatAutoAccept: null,
          connectionData: null,
          customerName: 'Customer'
        },
        mute: null,
        forcedMute: null,
        quickConnectName: null,
        monitorStatus: null
      }
    ],
    attributes: {},
    contactDuration: '4',
    name: null,
    description: null,
    initiationMethod: null,
    contactFeatures: {
      attachmentsEnabled: false,
      messagingMarkdownEnabled: true,
      multiPartyConferenceEnabled: null
    },
    status: {
      type: 'connected',
      timestamp: '2023-01-24T05:33:11.504Z'
    },
    userProfile: {
      customerProfile: {
        email: 'Ragahav@gmail.com',
        gender: 'male',
        phone_number: '0994-542-1811',
        birthdate: 828860373,
        location: {
          street: '3361 babtap drive',
          city: 'Austin',
          state: 'Texas',
          postcode: '75012'
        },
        username: 'purpleostrich818',
        nick_name: 'pumper',
        first_name: 'Ragahav',
        last_name: 'Lawrence',
        title: 'miss',
        picture: 'women/31.jpg'
      },
      recentHistory: [
        {
          task_name: 'General Liability',
          task_status: 'Completed',
          type: 'Chat',
          assigned_to: 'John Doe',
          due_date: '2023-01-01',
          duration: '30 min',
          nps: '8/10'
        },
        {
          task_name: 'Change of Address',
          task_status: 'In Progress',
          type: 'Call',
          assigned_to: 'Ricky Bobby',
          due_date: '2023-05-01',
          duration: '30 min',
          nps: '8/10'
        },
        {
          task_name: 'Loss History',
          task_status: 'In Progress',
          type: 'Call',
          assigned_to: 'Wayne Gretzky',
          due_date: '2023-10-01',
          duration: '26 min',
          nps: '8/10'
        }
      ],
      customer360: {
        territory: '07-109',
        account_name: 'Susan\'s Baptist Church',
        account_numner: '123456789',
        industry: 'Religious Organization',
        short_name: 'SBC',
        revenue: '$1,000,000',
        demographic_code: '1',
        phone_number: '(555) 555-5555',
        website: 'www.susansbaptistchurch.com',
        group_number: '123456789',
        employees: '100',
        account_manager_name: 'John Doe',
        ticker_symbol: 'SBC',
        dba: 'Susan\'s Baptist Church',
        classification: '88 - Misc Associations',
        denomination_organization: '10 - Baptist Associations church schools',
        geographic: '1 - North America',
        'x-date': '2015-01-01'
      },
      activeProducts: [
        {
          policy_name: 'General Liability',
          policy_number: '123456789',
          expiration_date: '2015-01-01'
        },
        {
          policy_name: 'Property',
          policy_number: '123456789',
          expiration_date: '2015-01-01'
        },
        {
          policy_name: 'Workers Compensation',
          policy_number: '123456789',
          expiration_date: '2015-01-01'
        },
        {
          policy_name: 'Umbrella',
          policy_number: '123456789',
          expiration_date: '2015-01-01'
        }
      ],
      policyDetails: {
        policy_effective_date: '2015-01-01',
        expiration_date: '2015-01-01',
        affinity_program: 'No',
        quote_need_by_date: '2015-01-01',
        producer_on_the_account: 'John Doe',
        loss_ratio: '0.00',
        no_of_claims_in_last_6_years: '0',
        commision_percentage_for_broker_and_agency: '0.00',
        total_insured_value: '$0.00'
      }
    }
  }